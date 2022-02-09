import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/options',
  },
  {
    path: '/options',
    name: 'Options',
    component: () => import(/* webpackChunkName: "options" */ '../views/Options.vue'),
  },
  {
    path: '/composition',
    name: 'Composition',
    component: () => import(/* webpackChunkName: "composition" */ '../views/Composition.vue'),
  },
  {
    path: '/ref-sugar227',
    name: 'RefSugar227',
    component: () => import(/* webpackChunkName: "ref-sugar" */ '../views/RefSugar227.vue'),
  },
  // {
  //   path: '/ref-sugar228',
  //   name: 'RefSugar228',
  //   component: () => import(/* webpackChunkName: "ref-sugar" */ '../views/RefSugar228-del.vue'),
  // },
  {
    path: '/ref-sugar369',
    name: 'RefSugar369',
    component: () => import(/* webpackChunkName: "ref-sugar" */ '../views/RefSugar369.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
