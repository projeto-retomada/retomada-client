import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// Containers
const TheContainer = () =>
  import('@/containers/TheContainer')

// Views
const Dashboard = () =>
  import('@/views/Dashboard')

const Profile = () =>
  import('../views/base/profile/Profile.vue')

const Login = () =>
  import('../views/pages/login/Login.vue')

const Users = () =>
  import('../views/base/users/Users.vue')

const PlacesList = () =>
  import('../views/base/places/PlacesList.vue')

const PlacesView = () =>
  import('../views/base/places/PlacesView.vue')

// QUESTIONNAIRE COMPONENTS
const QuestionnaireList = () =>
  import('../views/base/questionnaire/QuestionnaireList.vue')
const QuestionnaireForm = () =>
  import('../views/base/questionnaire/QuestionnaireForm.vue')

// ACTIVITIES COMPONENTS
const ActivitiesList = () =>
  import('../views/base/activities/ActivitiesList.vue')

Vue.use(Router)

const router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

router.beforeEach((to, from, next) => {
  var token = localStorage.getItem('token');
  token = token ? JSON.parse(localStorage.getItem('token')) : '';
  if (to.name !== 'Login' && (!token || (!store.state.authenticated && token && token.expires < new Date()))) {
    next({ name: 'Login' })
  }
  else {
    store.commit("setAuthentication", true);
    next()
  }
})

export default router

function configRoutes() {
  return [{
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: TheContainer,
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/profile/:username',
      name: 'Profile',
      component: Profile,
      props: true,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/questionnaire',
      name: 'Questionnaire',
      component: QuestionnaireList
    },
    {
      path: '/questionnaire/answer',
      name: 'QuestionnaireForm',
      component: QuestionnaireForm
    },
    {
      path: '/questionnaire/show/:idQuestionnaire',
      name: 'QuestionnaireFormRead',
      component: QuestionnaireForm,
      props: true,
    },
    {
      path: '/places/',
      name: 'Places',
      component: PlacesList
    },
    {
      path: '/places/view/:place',
      name: 'PlacesView',
      component: PlacesView,
      props: (route) => ({
        ...route.params
      })
    },
    {
      path: '/activities/',
      name: 'Activities',
      component: ActivitiesList
    },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  ]
}
