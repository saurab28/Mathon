import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Calculate from '@/components/Calculate.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : "login",
      component : Login
    },
    {
      path : '/calculate',
      name: "calculate",
      component:Calculate
    }
  ],
})


export default router
