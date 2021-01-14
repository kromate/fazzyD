import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/Home.vue')
const Details = () => import('@/views/Details.vue')
const Cart = () => import('@/views/Cart.vue')
const Checkout = () => import('@/views/Checkout.vue')
const Order = () => import('@/views/Order.vue')
const Login = () => import('@/views/Login.vue')
const Signup = () => import('@/views/Signup.vue')

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
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
