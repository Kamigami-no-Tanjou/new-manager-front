import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/library',
      name: 'componentLibrary',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComponentLibraryView.vue')
    },

    {
      path: '/characs',
      name: 'characters',
      component: () => import('../views/ComponentLibraryView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/ComponentLibraryView.vue')
    },
    {
      path: '/magics',
      name: 'magics',
      component: () => import('../views/ComponentLibraryView.vue')
    },
    {
      path: '/nations',
      name: 'nations',
      component: () => import('../views/ComponentLibraryView.vue')
    },
    {
      path: '/classes',
      name: 'magicalClasses',
      component: () => import('../views/ComponentLibraryView.vue')
    },
    {
      path: '/mpc',
      name: 'mpc',
      component: () => import('../views/ComponentLibraryView.vue')
    },
    {
      path: '/elems',
      name: 'elements',
      component: () => import('../views/ComponentLibraryView.vue')
    },
    {
      path: '/leaders',
      name: 'nationLeaders',
      component: () => import('../views/ComponentLibraryView.vue')
    },
  ]
});

export default router;
