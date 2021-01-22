import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './styles/reset.css'
import router from './router'
// import store from './store'
import AntFont from './components/AntFont/index'


Vue.config.productionTip = false

Vue.component(AntFont)

Vue.use(Antd)

new Vue({
  render: h => h(App),
  router
  // store
}).$mount('#app')
