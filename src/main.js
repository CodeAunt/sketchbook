import Vue from 'vue'
import paper from 'paper'
import App from './App.vue'
import store from './store'
import VTooltip from 'v-tooltip'
import 'tailwindcss/tailwind.css'
import router from './router'
import Resource from 'vue-resource';

paper.install(window)
Vue.prototype.$store = store
Vue.config.productionTip = false

Vue.use(VTooltip)
Vue.use(Resource)

export default new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
