import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WaysToGive from '../views/WaysToGive.vue'
import Contact from '../components/Contact.vue'
import WhatWeDo from '../views/WhatWeDo.vue'
import WhoWeAre from '../views/WhoWeAre.vue'
import LogIn from '../components/LogIn.vue'
import UserSignUp from '../components/UserSignUp.vue'
import Donate from '../components/Donate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/ways-to-give',
    name: 'ways-to-give',
    component: WaysToGive
  },

  {
    path: '/contact',
    name: 'contact-vue',
    component: Contact
  },

  {
    path: '/what-we-do',
    name: 'what-we-do',
    component: WhatWeDo
  },

  {
    path: '/who-we-are',
    name: 'who-we-are',
    component: WhoWeAre
  },

  {
    path: '/login',
    name: 'log-in',
    component: LogIn
  },


  {
    path: '/signup',
    name: 'sign-up',
    component: UserSignUp
  },
  
  
  {
    path: '/donate',
    name: 'donate-vue',
    component: Donate
  },
  

  
  
]

const router = new VueRouter({
  routes
})

export default router
