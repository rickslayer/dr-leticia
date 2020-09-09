import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import vueScrollto from 'vue-scrollto'
import vueScrollReveal from 'vue-scroll-reveal'
import vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(vueScrollReveal)
Vue.use(vueScrollto)
Vue.use(vuex)

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
