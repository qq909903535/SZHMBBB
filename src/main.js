//引入vue模块
import Vue from 'vue'
//引入app模板根节点
import App from './App.vue'
//引入index组件
import index from './components/index.vue'
//引入路由模块
import VueRouter from 'vue-router'

//使用路由中间件
Vue.use(VueRouter)

//定义路由规则
const router = new VueRouter({
  routes :[
    { path: '/index', component: index }
  ],
})

//引入css 
import './assets/statics/site/css/style.css';


//关闭vue窗口错误提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
