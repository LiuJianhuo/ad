import Vue from 'vue'
import VueRouter from 'vue-router'
import TaskDetail from '../views/taskdetail'
import AdTask from '../views/AdTask'

Vue.use(VueRouter)

const routes = [
  {
    path: '/addetail',
    component: TaskDetail
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
