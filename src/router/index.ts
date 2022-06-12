import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/PttHome.vue'),
  },
  // {
  //   path: '/Article',
  //   name: 'Article',
  //   component: () => import('../views/Article.vue'),
  // },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/Login',
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
