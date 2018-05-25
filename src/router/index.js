import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ok from '@/components/ok'
import weifang from '@/components/weifang'
import fenlei from '@/components/fenlei'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ok',
      name: 'ok',
      component: ok
    },
    {
      path: '/weifang',
      name: 'weifang',
      component: weifang
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    }
  ]
})
