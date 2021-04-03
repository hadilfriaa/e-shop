import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Shop from '../views/Shop.vue';
import User from '../views/User.vue';
import Product from "../views/Product.vue";
import Login from "../views/Login.vue";
import Category from "../views/Category.vue";
import Favoris from "../views/Favoris.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/account',
    name: 'User',
    component: User,
    beforeEnter(to, from, next) {
      console.log('test')
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue')
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import(/* webpackChunkName: "Sign" */ '../views/Sign.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  },

  {
    path: '/userAd',
    name: 'UserAd',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/UserAd.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/favoris',
    name: 'Favoris',
    component: Favoris
  }
  


]

const router = new VueRouter({
  routes
})

export default router