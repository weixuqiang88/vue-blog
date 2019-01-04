import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import addblog from '@/components/addblog'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path:'addblog',
          name:'addblog',
          component: addblog
        }
      ]
    }
  ]
})
