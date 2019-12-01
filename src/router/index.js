import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdDetail from '../views/AdDetail'
import AdTask from '../views/AdTask'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/addetail',
    component: AdDetail
  },
  {
    path: '/adtask',
    component: AdTask
  }
]

const router = new VueRouter({
  routes
})

export default router
