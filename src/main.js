import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
Vue.use(MintUI)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsiL2FwaSIsIjE1NzQ5OTcxNzgyMjUiLCIxMDIzOCJdfQ.bN17lIjuczFbb4TgSuwAfo5_h91X1mRNTh9UzWFa6po'
  return config
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
