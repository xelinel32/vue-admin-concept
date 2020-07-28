import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'users',
    component: () => import('../views/Users.vue'),
  },
  {
    path: '/edit-user/:id',
    name: 'editUser',
    component: () => import('../views/EditUser.vue'),
  },
  {
    path: '/add-user',
    name: 'addUser',
    component: () => import('../views/AddUser.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/Contacts.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes,
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})
export default router
