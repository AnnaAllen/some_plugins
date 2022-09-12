import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueContextMenu from 'vue-contextmenu'
import ElementUI from 'element-ui';
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// Vue.use(VueContextMenu)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
