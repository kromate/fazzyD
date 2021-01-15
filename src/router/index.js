import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store';
const Home = () => import('@/views/Home.vue')
const Details = () => import('@/views/Details.vue')
const Cart = () => import('@/views/Cart.vue')
const Checkout = () => import('@/views/Checkout.vue')
const Order = () => import('@/views/Order.vue')
const Login = () => import('@/views/Login.vue')
const Signup = () => import('@/views/Signup.vue')
const Favourite = () => import('@/views/Favourite.vue')
const Gallery = () => import('@/views/Gallery.vue')
const Custom_order = () => import('@/views/Custom_order.vue')

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
  {
    path: '/favourite',
    name: 'Favourite',
    component: Favourite
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/custom_order',
    name: 'Custom_order',
    component: Custom_order
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  next(); 
  console.log('object');
    store.commit("changeMenu")

})

export default router
