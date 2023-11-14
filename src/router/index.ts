import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/home',
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
                path: '/opencfd',
                name: 'OpenCFD',
                meta: {
                    title: '云上仿真应用服务平台'
                },
                component: () => import('@/views/opencfd.vue')
            },
            {
                path: '/cdem',
                name: 'CDEM',
                meta: {
                    title: '云上仿真应用服务平台'
                },
                component: () => import('@/views/cdem.vue')
            },
            {
                path: '/cado',
                name: 'CADO',
                meta: {
                    title: '云上仿真应用服务平台'
                },
                component: () => import('@/views/cado.vue')
            },
            {
                path: '/simech',
                name: 'SiMech',
                meta: {
                    title: '云上仿真应用服务平台'
                },
                component: () => import('@/views/simech.vue')
            },
        ]
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
