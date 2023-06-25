import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/public/home/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/grupos',
    name: 'grupos',
    component: () => import(/* webpackChunkName: "grupos" */ '../views/public/grupos/GroupView.vue')
  },
  {
    path: '/grupos/miembros',
    name: 'miembros',
    component: () => import(/* webpackChunkName: "members" */ '../views/public/grupos/MembersView.vue')
  },
  {
    //lazy load of TareasView
    path: '/tareas',
    name: 'tareas',
    component: () => import(/* webpackChunkName: "tareas" */ '../views/public/tareas/TareasView.vue')

  },
  {
    path: '/misgrupos',
    name: 'misgrupos',
    component: () => import(/* webpackChunkName: "misgrupos" */ '../views/public/grupos/MyGroupsView.vue')
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
