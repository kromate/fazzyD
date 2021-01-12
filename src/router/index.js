import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/Home.vue')
const Details = () => import('@/views/Details.vue')
const Cart = () => import('@/views/Cart.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
