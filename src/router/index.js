import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/view/x6-flow-chart'
  },
  {
    path: '/ag-demo',
    name: 'agDemo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ag-grid-demo/index.vue')
  },
  {
    path: '/view/x6-flow-chart',
    name: 'x6FlowChart',
    component: () => import('../views/x6FlowChart/index.vue')
  },
  {
    path: '/view/router-test',
    name: 'routerTest',
    component: () => import('../views/router-test/index.vue'),
  },
  {
    path: '/wang-editor',
    name: 'wangEditor',
    component: () => import('../views/wangEditor/index.vue')
  },
  {
    path: '/about-ele',
    name: 'aboutEle',
    component: () => import('../views/about-ele/index.vue')
  },
  {
    path: '/baidu-map',
    name: 'baiduMap',
    component: () => import('../views/baidu-map/index.vue')
  },
  {
    path: '/some-style-tip',
    // name: 'someStyleTip',
    component: () => import('../views/some-style-tip/index.vue'),
    children: [
      {
        path: '/backdrop-filter',
        name: 'backdropFilter',
        component: () => import('../views/some-style-tip/item/backdrop-filter.vue')
      },
      {
        path: '/dom-event',
        name: 'domEvent',
        component: () => import('../views/some-style-tip/item/dom-event.vue')
      },
      {
        path: '/picture-compression',
        name: 'pictureCompression',
        component: () => import('../views/some-style-tip/item/picture-compression.vue')
      }
    ]
  },
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
