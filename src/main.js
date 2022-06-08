import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueContextMenu from 'vue-contextmenu'
import EVueContextmenu from 'e-vue-contextmenu'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Contextmenu from 'vue-contextmenujs'

Vue.use(Contextmenu)
Vue.use(EVueContextmenu);
Vue.use(ElementUI);
Vue.use(VueContextMenu)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
