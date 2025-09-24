import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Calculate from '@/components/Calculate.vue'
import NotFound from '@/components/NotFound.vue'
import { useAuth } from '@/stores/auth'



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

    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ],
})


export default router

router.beforeEach((to, from, next) => {
  const Authstore = useAuth()
  const {isAuth} = Authstore


  if (to.path==='/calculate' && !isAuth) {

    next('/')
  } else if ((to.path === '/login') && isAuth) {

    next('/calculate')
  } else {
    
    next()
  }
})
