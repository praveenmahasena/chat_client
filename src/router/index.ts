import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/createAccount',
      component: () => import('../views/CreateAccount.vue')
    },
    {
      path: '/profile',
      component: () => import('../views/Profile.vue')
    }
  ]
})

export default router
