import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
    
  },

  {
    path: '/voucher',
    name: 'Voucher',
    component: () => import('../views/Voucher.vue')
    
  },

  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue')
    
  },

  {
    path: '/about_us',
    name: 'about_us',
    component: () => import('../views/AboutUs.vue')
    
  }

    
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
