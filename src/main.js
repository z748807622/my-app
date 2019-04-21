import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import global from './components/global.vue'
let bus = new Vue()
Vue.config.productionTip = false
Vue.prototype.GLOBAL = global;
Vue.prototype.bus = bus

new Vue({
  render: h => h(App),
}).$mount('#app')

