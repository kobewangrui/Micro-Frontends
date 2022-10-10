import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import { registerMicroApps, start } from 'qiankun';
import PublicFooter from "./components/PublicFooter";
import _ from 'lodash'


// 全局组件注册
window.commonComponents= { PublicFooter }


// cloneDeep 深拷贝
for (const componentsName in window.commonComponents) {
  Vue.component(componentsName, _.cloneDeep(window.commonComponents[componentsName]))
}

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
