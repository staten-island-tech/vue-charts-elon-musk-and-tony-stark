import { createRouter, createWebHistory } from 'vue-router'
import DataFetch from '@/components/DataFetch.vue'
import ArriveTimes from '@/views/ArriveTimes.vue'
import TheGraphs from '@/views/TheGraphs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      component: ArriveTimes
    },
    {
      path: '/graphs',
      component: TheGraphs
    }
  ]
})

export default router
