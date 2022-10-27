import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWorker from 'vue-worker'
// import VueContextMenu from 'vue-contextmenu'
import ElementUI from 'element-ui'
import BaiduMap from 'vue-baidu-map'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueWorker)
Vue.use(BaiduMap, { ak: 'vjXVrslpZqufBPPj5PS90mReEqG6b8DI' })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
