const Order = () => import('@/views/admin/Order.vue')
const Upload = () => import('@/views/admin/Upload.vue')
const Home = () => import('@/views/admin/Home.vue')
const Gallery = () => import('@/views/admin/Gallery.vue')

const hash = 12345
export default [
    {
        path: `/admin/${hash}/order`,
        name: 'Admin_Order',
        component: Order
      },
    {
        path: `/admin/${hash}/upload`,
        name: 'Admin_Upload',
        component: Upload
      },
    {
        path: `/admin/${hash}/home`,
        name: 'Admin_Home',
        component: Home
      },
    {
        path: `/admin/${hash}/gallery`,
        name: 'Admin_Gallery',
        component: Gallery
      },
]