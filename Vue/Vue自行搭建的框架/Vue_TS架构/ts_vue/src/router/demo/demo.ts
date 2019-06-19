
const routes = [
    {
        path: '/',
        name: 'home',
        // component: require('./pages/Home'),
        meta: {}
    },
    {
        path: '/about',
        // component: require('./pages/About'),
        meta: {}
    },
    {
        path: '/posts/:id',
        name: 'posts',
        // component: require('./pages/posts/Post'),
        meta: {}
    },
];

export default routes;
