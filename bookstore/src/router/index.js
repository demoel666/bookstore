import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import About from '@/components/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{Auth:false, title:'Inicio'}
    },
     {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{Auth:false, title:'Register'}
    },
     {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{Auth:false, title:'Login'}
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {Auth: false, tittle: 'Inicio'}
    }
  ]
})
