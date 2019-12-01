import Vue from 'vue'
import VueRouter from 'vue-router'
import AdDetail from '../views/AdDetail'
import Taskdetail from '../views/taskdetail'

Vue.use(VueRouter)

const routes = [
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
    path: '/taskdetail',
    component: Taskdetail
  }
]

const router = new VueRouter({
  routes
})

export default router
