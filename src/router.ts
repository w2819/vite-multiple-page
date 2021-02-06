import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes = [
    {
        path: '/userInfo',
        name: 'userInfo',
        component: () => import('./views/userInfo.vue'),
        meta: {
            title: '我的资料',
        },
    },
];

const router = createRouter({
    history: createWebHistory('/nested'),
    routes: routes as RouteRecordRaw[],
    strict: true,
});

export function setupRouter (app: App<Element>) {
    app.use(router);
}

export default router;
