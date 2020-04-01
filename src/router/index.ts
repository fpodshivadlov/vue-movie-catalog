import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchPage from '../views/SearchPage/SearchPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SearchPage',
    component: SearchPage
  },
  {
    path: '/details',
    name: 'MoviePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MoviePage/MoviePage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
