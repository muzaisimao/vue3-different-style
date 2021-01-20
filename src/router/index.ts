import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
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
    path: '/options-ts',
    name: 'OptionsTS',
    component: () => import(/* webpackChunkName: "options" */ '../views/OptionsTS.vue'),
  },
  {
    path: '/composition',
    name: 'Composition',
    component: () => import(/* webpackChunkName: "composition" */ '../views/Composition.vue'),
  },
  {
    path: '/composition-ts',
    name: 'CompositionTS',
    component: () => import(/* webpackChunkName: "Composition" */ '../views/CompositionTS.vue'),
  },
  {
    path: '/ref-sugar1',
    name: 'RefSugar1',
    component: () => import(/* webpackChunkName: "ref-sugar" */ '../views/RefSugar1.vue'),
  },
  {
    path: '/study',
    name: 'Study',
    component: () => import(/* webpackChunkName: "study" */ '../views/Study.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
