import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/public/home/HomeView.vue'
import GroupView from '../views/public/grupos/GroupView.vue'
<<<<<<< HEAD
import MyGruopsView from '../views/public/grupos/MyGroupsView.vue'
=======
import MembersView from '../views/public/grupos/MembersView.vue'
>>>>>>> bbc96aa4516677e6f38d0a1bd7a0895ba840bdec


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/group',
    name: 'group',
    component: GroupView
  },
  {
<<<<<<< HEAD
    path: '/mygroups',
    name: 'mygroups',
    component: MyGruopsView
=======
    path: '/group/members',
    name: 'members',
    component: MembersView
  },
  {

>>>>>>> bbc96aa4516677e6f38d0a1bd7a0895ba840bdec
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
