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
Vue.use(Vant)

// Vue.use(Button)
// 全局注册
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
