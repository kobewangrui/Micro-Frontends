import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import { registerMicroApps, start } from 'qiankun';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

registerMicroApps([
  {
    name: '第一个应用',
    entry: '//localhost:7101',
    container: '#container1',
    activeRule: '/vue1',
  },
  {
    name: '第二个应用',
    entry: '//localhost:7102',
    container: '#container2',
    activeRule: '/vue2',
  },
]);
start();
