import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/view/x6FlowChart'
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
    path: '/view/x6FlowChart',
    name: 'x6FlowChart',
    component: () => import('../views/x6FlowChart/index.vue')
  },
  {
    path: '/view/routerTest',
    name: 'routerTest',
    component: () => import('../views/router-test/index.vue'),
    children: [
      { path: 'demo1', name: 'demo1', component: () => import('../components/router-demo/demo1.vue') },
      { path: 'demo2', name: 'demo2', component: () => import('../components/router-demo/demo2.vue') },
    ]
  },
  // {
  //   path: '/view/piniaTest',
  //   name: 'piniaTest',
  //   component: () => import('../components/pinia-test/index.vue'),
  // }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
