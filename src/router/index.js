import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/public/home/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const hasTrailingSlash = to.path.endsWith('/')
  if (hasTrailingSlash && to.path !== '/') {
    next(to.path.slice(0, -1))
  } else if (!hasTrailingSlash && to.matched.length === 0) {
    next('/not-found')
  } else {
    next()
  }
})

export default router
