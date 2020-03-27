import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { Store } from 'vuex';

import { getMovieMapper } from '../store';

import SearchPage from '../views/SearchPage/SearchPage.vue';
import NotFoundPage from '../views/NotFoundPage/NotFoundPage.vue';

Vue.use(VueRouter);

export default (store: Store<object>) => {
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
      path: '/details/:id(\\d+)',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "details" */ '../views/MoviePage/MoviePage.vue'),
      meta: {
        title: 'Movie Details',
      },
      beforeEnter(to, from, next) {
        const storeContext = {
          $store: store,
          ...getMovieMapper.mapActions({ getMovie: 'getItem' }),
          ...getMovieMapper.mapState({ movie: 'item' }),
        };

        storeContext.getMovie(parseInt(to.params.id, 10)).then(() => {
          const movieItem = storeContext.movie();
          if (!movieItem) {
            return next({ name: '404' });
          }

          return next();
        });
      },
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundPage,
      meta: {
        title: 'Not Found',
      },
    },
    {
      path: '*',
      redirect: { name: '404' },
    },
  ];

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: (_to, _from, savedPosition) => savedPosition || { x: 0, y: 0 },
  });

  return router;
};
