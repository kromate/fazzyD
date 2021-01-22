const Order = () => import('@/views/admin/Order.vue')
const Upload = () => import('@/views/admin/Upload.vue')
const Home = () => import('@/views/admin/Home.vue')

export default [
    {
        path: '/admin/12345/order',
        name: 'Admin_Order',
        component: Order
      },
    {
        path: '/admin/12345/upload',
        name: 'Admin_Upload',
        component: Upload
      },
    {
        path: '/admin/12345/home',
        name: 'Admin_Home',
        component: Home
      },
]