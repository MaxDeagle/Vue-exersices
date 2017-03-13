import Vue from 'vue'
import Router from 'vue-router'
import Coffee from '@/components/Coffee'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Coffee',
      name: 'Coffee',
      component: Coffee
    },
    {
    	path: '/',
    	name: 'Home',
    	component: Home
    }
  ]
})
