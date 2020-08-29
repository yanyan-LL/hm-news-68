import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入组件
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  // 通过params传参需要给路由设置name名称  一般默认情况下我们都给路由起个name
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' }
]

const router = new VueRouter({
  routes
})

export default router
