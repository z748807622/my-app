import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import global from './components/global.vue'

Vue.config.productionTip = false
Vue.prototype.GLOBAL = global;

new Vue({
  render: h => h(App),
}).$mount('#app')
