import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入通用的样式
import './styles/base.less'
// 导入字体图标
import './styles/iconfont.css'
// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// import { Button } from 'vant'
// 导入amfe-flexible库
import 'amfe-flexible'
// 导入头部导航
import HmHeader from './components/HmHeader.vue'
// 导入黑马logo
import HmLogo from './components/HmLogo.vue'
import axios from 'axios'
// 导入navitem
import HmNavItem from './components/HmNavItem.vue'
import moment from 'moment'
Vue.prototype.$axios = axios
// 给axios配置默认的baseURL， 基准地址
axios.defaults.baseURL = 'http://localhost:3000'
Vue.use(Vant)

// Vue.use(Button)
// 全局注册
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-navitem', HmNavItem)
Vue.filter('time', input => {
  return moment(input).format('YYYY-MM-DD')
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
