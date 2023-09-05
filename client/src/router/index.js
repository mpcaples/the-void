import { createRouter, createWebHistory } from 'vue-router'
import TestPing from '../components/TestPing.vue'
import VoidView from '../views/VoidView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'void',
      component: VoidView,
    },
    {
      path: '/ping',
      name: 'ping',
      component: TestPing
    },
  ]
})

export default router