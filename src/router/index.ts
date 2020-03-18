import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SearchPage from '../views/SearchPage/SearchPage.vue'
import NotFoundPage from '../views/NotFoundPage/NotFoundPage.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: SearchPage,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/details/:id',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MoviePage/MoviePage.vue'),
    meta: {
      title: 'Movie Details',
    },
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFoundPage,
    meta: {
      title: 'Not Found',
    },
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (_to, _from, savedPosition) => {
    return savedPosition || { x: 0, y: 0 };
  },
})

export default router
