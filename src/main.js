import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarCheck, faInfoCircle, faEllipsisH, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEllipsisH, faCalendarCheck, faInfoCircle, faMapMarker)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(VueAxios, axios)
Vue.prototype.$log = console.log.bind(console)
Vue.prototype.$RETOMADA = {}

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
