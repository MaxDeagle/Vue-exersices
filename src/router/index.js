import Vue from 'vue'
import Router from 'vue-router'
import Coffee from '@/components/Coffee/Coffee'
import Home from '@/components/Home'
import Games from '@/components/Games/Games'

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
    },
    {
    	path: '/Games',
    	name: 'Games',
    	component: Games
    }
  ]
})
