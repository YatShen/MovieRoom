import Layout from '@/layouts/default/Layout';

const tableRouter = {
    path: '/table',
    component: Layout,
    redirect: '/table/complex-table',
    name: 'Table',
    meta: {
        title: 'Table',
        icon: 'table'
    },
    children: [
        {
            path: 'dynamic-table',
            component: () => import('@/views/Table'),
            name: 'DynamicTable',
            meta: { title: 'dynamicTable' }
        },
    ]
}