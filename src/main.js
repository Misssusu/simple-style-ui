import Vue from 'vue'
import App from './App.vue'
import SUI from './entry'
import store from "./store"

Vue.config.productionTip = false;
Vue.use(SUI);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
