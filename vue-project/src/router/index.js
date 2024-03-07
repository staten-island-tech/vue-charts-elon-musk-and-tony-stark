import { createRouter, createWebHistory } from 'vue-router'
import DataFetch from '@/components/DataFetch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DataFetch
        },
    {
      
    }
  ]
})

export default router
