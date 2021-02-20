import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store';
import firebase from "firebase/app";
import "firebase/auth";
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
const Profile = () => import('@/views/Profile.vue')
import admin from './admin.js'
const routes = [
  ...admin,
  {
    path: '/',
    redirect: 'Home',
  },
  {
    path: '/home',
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
    component: Cart,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/favourite',
    name: 'Favourite',
    component: Favourite,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
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
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !(await firebase.getCurrentUser())) {
    next({ name: "Login" });
  } 
  else if (
    to.matched.some(record => record.meta.requiresGuest) &&
    (await firebase.getCurrentUser())
  ) {
    next({
      name: "Home"
    });
  }
  else{
    next(); 
    store.commit("changeMenu")
  }
});

export default router
