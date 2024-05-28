import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { isModifier } from 'typescript'

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
      path: '/createaccount',
      component: () => import('../views/CreateAccount.vue')
    },
    {
      path: '/profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/chatroom',
      component: () => import('../views/Chatroom.vue')
    }
  ]
})

export default router
