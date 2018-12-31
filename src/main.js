import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'

Vue.config.productionTip = false

const id = Promise.resolve([ 'UA-XXX-A', 'UA-XXX-B' ])

Vue.use(VueAnalytics, {
  id: id,
})

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
