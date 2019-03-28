import Layout from '@/layouts/default/Layout';

const adminRouter = {
    path: '/admin',
    component: Layout,
    redirect: '/admin/list',
    name: 'Admin',
    meta: {
        title: '管理员管理',
        icon: 'table',
        roles: ['admin', 'editor']
    },
    children: [
        {
            path: 'list',
            component: resolve => require(['@/views/Admin/List'], resolve),
            name: 'AdminList',
            meta: {
                title: '管理员管理',
                icon: 'table',
                roles: ['admin']
            }
        },
        {
            path: 'edit/:id(\\d+)',
            component: resolve => require(['@/views/Admin/List'], resolve),
            name: 'AdminList',
            meta: {
                title: '管理员修改',
                roles: ['admin.edit'],
                noCache: true
            },
            hidden: true
        }
    ]
}

export default adminRouter