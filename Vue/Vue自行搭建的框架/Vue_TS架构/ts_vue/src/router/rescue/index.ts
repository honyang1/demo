const routes = [
    {
        path: '/receptionCenter',
        name: 'receptionCenter',
        component: () => import('@/views/rescue/receptionCenter/receptionCenter.vue'),
        meta: {
            icon: '',
            keepAlive: false,
            title: '服务受理',
            requireAuth: true
        }
    },
    {
        path: '/acceptance',
        name: 'acceptance',
        component: () => import('@/views/rescue/acceptance/acceptance.vue'),
        meta: {
            icon: '',
            keepAlive: false,
            title: '受理案件',
            requireAuth: true
        }
    },
    {
        path: '/handle',
        name: 'handle',
        component: () => import('@/views/rescue/handle/handle.vue'),
        meta: {
            icon: '',
            keepAlive: false,
            title: '案件处置',
            requireAuth: true
        }
    }
];

export default routes;
