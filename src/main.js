import Vue from 'vue'
import App from './App.vue'
import SUI from './entry'

console.log(SUI);
Vue.config.productionTip = false;
Vue.use(SUI);

new Vue({
  render: h => h(App),
}).$mount('#app');
