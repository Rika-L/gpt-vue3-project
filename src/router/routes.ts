export const constantRoute = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/feedback',
        name: 'feedback',
        component: () => import('@/views/feedback/index.vue'),
      },
      {
        path: '/purchase',
        name: 'purchase',
        component: () => import('@/views/purchase/index.vue'),
      },
    ],
  },
]
