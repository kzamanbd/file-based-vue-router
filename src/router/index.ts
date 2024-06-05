import { createRouter, createWebHistory } from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';

// Add the 404 route
routes.push({
    path: '/:catchAll(.*)',
    component: () => import('@/pages/NotFound.vue')
});

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
