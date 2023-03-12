import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/Main.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/Login.vue'),
      meta: {
        closedForAuthUser: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/Register.vue'),
      meta: {
        closedForAuthUser: true
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/Projects.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/Users.vue')
    }
  ]
})

router.beforeEach((to, from) => {

  // for removing auth problem
  const authStore = useAuthStore();
  authStore.setAuthUser();

  if (to.meta.closedForAuthUser) {
    if (authStore.authUser) {
      return from
    }
  }

  return true
})

export default router
