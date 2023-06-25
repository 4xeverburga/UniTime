import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/public/home/HomeView.vue'
import GroupView from '../views/public/grupos/GroupView.vue'
import MyGruopsView from '../views/public/grupos/MyGroupsView.vue'
import MembersView from '../views/public/grupos/MembersView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/grupos',
    name: 'grupos',
    component: GroupView
  },
  {
    path: '/misgrupos',
    name: 'mygroups',
    component: MyGruopsView
  },
  {
    path: '/group/members',
    name: 'members',
    component: MembersView
  },
  {
    //lazy load of TareasView
    path: '/tareas',
    name: 'tareas',
    component: () => import(/* webpackChunkName: "tareas" */ '../views/public/tareas/TareasView.vue')

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
