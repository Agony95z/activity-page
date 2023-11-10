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
                path: '/home',
                name: 'home',
                meta: {
                    title: '云上仿真应用服务平台'
                },
                component: () => import('@/views/home.vue')
            },
            {
                path: '/page1',
                name: 'page1',
                meta: {
                    title: '云上仿真应用服务平台'
                },
                component: () => import('@/views/page1.vue')
            },
            {
                path: '/page2',
                name: 'page2',
                meta: {
                    title: '云上仿真应用服务平台'
                },
                component: () => import('@/views/page2.vue')
            },
            {
                path: '/page3',
                name: 'page3',
                meta: {
                    title: '云上仿真应用服务平台'
                },
                component: () => import('@/views/page3.vue')
            },
            {
                path: '/page4',
                name: 'page4',
                meta: {
                    title: '云上仿真应用服务平台'
                },
                component: () => import('@/views/page4.vue')
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
