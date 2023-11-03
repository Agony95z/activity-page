import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/page1',
        meta: {
        },
        children: [
            {
                path: '/page1',
                name: 'page1',
                meta: {
                    title: 'Page1'
                },
                component: () => import('@/views/page1.vue')
            },
            {
                path: '/page2',
                name: 'page2',
                meta: {
                    title: 'Page2'
                },
                component: () => import('@/views/page2.vue')
            },
        ]
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
