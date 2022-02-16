import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios.js'
import App from './App.vue'
import router from './router'
import store from './store'
import './stylus/all.styl'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import mixin from './mixin.js'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

Vue.use(VueSweetalert2)
Vue.use(VueAwesomeSwiper)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('ImgInputer', ImgInputer)
Vue.mixin(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
