import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueFloatingAlert from 'vue-floating-alert'
import VueCookie from 'vue-cookie'

Vue.config.performance = true
Vue.use(VueFloatingAlert)
Vue.use(CoreuiVue)
Vue.use(VueAxios, axios)
Vue.use(VueCookie);
Vue.prototype.$log = console.log.bind(console)

Vue.axios.defaults.baseURL = 'http://localhost:3333/';
Vue.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.axios.interceptors.response.use(function(response) {
    return response
}, function(error) {
    if (error.response && error.response.status === 401) {
        Vue.$floatingAlert.warn({
            title: "Ops!",
            message: "Você não obteve autorização para fazer essa ação",
        })
    } else {
        Vue.$floatingAlert.error({
            title: "Ops!",
            message: "Algo de errado, tente novamente",
        })
    }
});

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