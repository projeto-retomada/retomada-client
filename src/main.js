import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import AlphaICircleOutline from 'vue-material-design-icons/AlphaICircleOutline.vue';
import CalendarBlankMultiple from 'vue-material-design-icons/CalendarBlankMultiple.vue';
 
Vue.component('menu-icon', MenuIcon);
Vue.component('i-circle', AlphaICircleOutline);
Vue.component('calendar-blank-multiple', CalendarBlankMultiple)
Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
