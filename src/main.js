import Vue from 'vue'
import App from './App.vue'
import SUI from './entry'

Vue.config.productionTip = false;
Vue.use(SUI);

new Vue({
  render: h => h(App),
}).$mount('#app');
