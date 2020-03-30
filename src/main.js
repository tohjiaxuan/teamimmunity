import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import database from "./firebase.js";
import store from './store.js'

import VueRouter from 'vue-router'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './Homepage.vue'
import About from './About.vue'
import Contact from './Contact.vue'

import Language from './components/Arnold/Language.vue'
import Python from './components/Arnold/Python.vue'
import Java from './components/Arnold/Java.vue'
import Js from './components/Arnold/Javascript.vue'

import Afterlog from './components/Arnold/Afterlogin.vue'

import Log from './components/Nicole/Login.vue'
import Register from './components/Nicole/Register.vue'
import Account from './components/Nicole/Account.vue'

import BT3103 from './components/JiaXuan/BT3103.vue'
import CS1010 from './components/JiaXuan/CS1010.vue'
import CS1010J from './components/JiaXuan/CS1010J.vue'
import CS1010S from './components/JiaXuan/CS1010S.vue'
import CS2030 from './components/JiaXuan/CS2030.vue'
import CS2040 from './components/JiaXuan/CS2040.vue'
import Proglang from './components/JiaXuan/Proglang.vue'


import btn from './components/Vicki/Button.vue'
import diff1 from './components/Vicki/Diff1.vue'
import diff2 from './components/Vicki/Diff2.vue'
import diff3 from './components/Vicki/Diff3.vue'

import Page1 from './components/Charlotte/Page1.vue'
import Py_easy_qn1 from './components/Charlotte/Py_easy_qn1.vue'
import Py_easy_qn2 from './components/Charlotte/Py_easy_qn2.vue'
import Py_easy_qn3 from './components/Charlotte/Py_easy_qn3.vue'
import Py_easy_qn4 from './components/Charlotte/Py_easy_qn4.vue'
import Py_easy_qn5 from './components/Charlotte/Py_easy_qn5.vue'

import Py_med_qn1 from './components/Charlotte/Py_med_qn1.vue'
import Py_med_qn2 from './components/Charlotte/Py_med_qn2.vue'
import Py_med_qn3 from './components/Charlotte/Py_med_qn3.vue'
import Py_med_qn4 from './components/Charlotte/Py_med_qn4.vue'
import Py_med_qn5 from './components/Charlotte/Py_med_qn5.vue'

import Py_hard_qn1 from './components/Charlotte/Py_hard_qn1.vue'
import Py_hard_qn2 from './components/Charlotte/Py_hard_qn2.vue'
import Py_hard_qn3 from './components/Charlotte/Py_hard_qn3.vue'
import Py_hard_qn4 from './components/Charlotte/Py_hard_qn4.vue'
import Py_hard_qn5 from './components/Charlotte/Py_hard_qn5.vue'

import Java_easy_qn1 from './components/Charlotte/Java_easy_qn1.vue'
import Java_easy_qn2 from './components/Charlotte/Java_easy_qn2.vue'
import Java_easy_qn3 from './components/Charlotte/Java_easy_qn3.vue'
import Java_easy_qn4 from './components/Charlotte/Java_easy_qn4.vue'
import Java_easy_qn5 from './components/Charlotte/Java_easy_qn5.vue'

import Java_med_qn1 from './components/Charlotte/Java_med_qn1.vue'
import Java_med_qn2 from './components/Charlotte/Java_med_qn2.vue'
import Java_med_qn3 from './components/Charlotte/Java_med_qn3.vue'
import Java_med_qn4 from './components/Charlotte/Java_med_qn4.vue'
import Java_med_qn5 from './components/Charlotte/Java_med_qn5.vue'

import Java_hard_qn1 from './components/Charlotte/Java_hard_qn1.vue'
import Java_hard_qn2 from './components/Charlotte/Java_hard_qn2.vue'
import Java_hard_qn3 from './components/Charlotte/Java_hard_qn3.vue'
import Java_hard_qn4 from './components/Charlotte/Java_hard_qn4.vue'
import Java_hard_qn5 from './components/Charlotte/Java_hard_qn5.vue'

import Javascript_easy_qn1 from './components/Charlotte/Javascript_easy_qn1.vue'
import Javascript_easy_qn2 from './components/Charlotte/Javascript_easy_qn2.vue'
import Javascript_easy_qn3 from './components/Charlotte/Javascript_easy_qn3.vue'
import Javascript_easy_qn4 from './components/Charlotte/Javascript_easy_qn4.vue'
import Javascript_easy_qn5 from './components/Charlotte/Javascript_easy_qn5.vue'

import Javascript_med_qn1 from './components/Charlotte/Javascript_med_qn1.vue'
import Javascript_med_qn2 from './components/Charlotte/Javascript_med_qn2.vue'
import Javascript_med_qn3 from './components/Charlotte/Javascript_med_qn3.vue'
import Javascript_med_qn4 from './components/Charlotte/Javascript_med_qn4.vue'
import Javascript_med_qn5 from './components/Charlotte/Javascript_med_qn5.vue'

import Javascript_hard_qn1 from './components/Charlotte/Javascript_hard_qn1.vue'
import Javascript_hard_qn2 from './components/Charlotte/Javascript_hard_qn2.vue'
import Javascript_hard_qn3 from './components/Charlotte/Javascript_hard_qn3.vue'
import Javascript_hard_qn4 from './components/Charlotte/Javascript_hard_qn4.vue'
import Javascript_hard_qn5 from './components/Charlotte/Javascript_hard_qn5.vue'

Vue.use(VueRouter);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false

const router = new VueRouter ({
  routes: [
    {path: '*', redirect: '/'},
    {path: '/', component: HomePage},
    {path: '/about', component: About},
    {path: '/contact', component: Contact},

    {path: '/language',component:Language, meta: {requiresAuth: true}},
    {path: '/language/python', component:Python},
    {path: '/language/java', component:Java},
    {path: '/language/javascript', component:Js},

    {path: '/reg', component: Register},
    {path: '/log', component: Log},

    {path: '/bt3103', component:BT3103},
    {path: '/cs1010', component:CS1010},
    {path: '/cs1010j', component:CS1010J},
    {path: '/cs1010s', component:CS1010S},
    {path: '/cs2030', component:CS2030},
    {path: '/cs2040', component:CS2040},
    {path: '/module', component:Proglang, meta: {requiresAuth: true}},
    
    {path: '/btn', component:btn},
    {path: '/diff1', component:diff1},
    {path: '/diff2', component:diff2},
    {path: '/diff3', component:diff3},
    
    {path: '/account', component:Afterlog, meta: {requiresAuth: true}},
    {path: '/account/edit', component:Account}, 

    { path:'/exercise', component: Page1, meta: {requiresAuth: true}},
    { path: '/Py_easy_qn1', component: Py_easy_qn1},
    { path: '/Py_easy_qn2', component: Py_easy_qn2},
    { path: '/Py_easy_qn3', component: Py_easy_qn3},
    { path: '/Py_easy_qn4', component: Py_easy_qn4},
    { path: '/Py_easy_qn5', component: Py_easy_qn5},

    { path: '/Py_med_qn1', component: Py_med_qn1},
    { path: '/Py_med_qn2', component: Py_med_qn2},
    { path: '/Py_med_qn3', component: Py_med_qn3},
    { path: '/Py_med_qn4', component: Py_med_qn4},
    { path: '/Py_med_qn5', component: Py_med_qn5},

    { path: '/Py_hard_qn1', component: Py_hard_qn1},
    { path: '/Py_hard_qn2', component: Py_hard_qn2},
    { path: '/Py_hard_qn3', component: Py_hard_qn3},
    { path: '/Py_hard_qn4', component: Py_hard_qn4},
    { path: '/Py_hard_qn5', component: Py_hard_qn5}, 

    { path: '/Java_easy_qn1', component: Java_easy_qn1}, 
    { path: '/Java_easy_qn2', component: Java_easy_qn2}, 
    { path: '/Java_easy_qn3', component: Java_easy_qn3}, 
    { path: '/Java_easy_qn4', component: Java_easy_qn4}, 
    { path: '/Java_easy_qn5', component: Java_easy_qn5}, 

    { path: '/Java_med_qn1', component: Java_med_qn1}, 
    { path: '/Java_med_qn2', component: Java_med_qn2}, 
    { path: '/Java_med_qn3', component: Java_med_qn3}, 
    { path: '/Java_med_qn4', component: Java_med_qn4}, 
    { path: '/Java_med_qn5', component: Java_med_qn5}, 

    { path: '/Java_hard_qn1', component: Java_hard_qn1}, 
    { path: '/Java_hard_qn2', component: Java_hard_qn2}, 
    { path: '/Java_hard_qn3', component: Java_hard_qn3}, 
    { path: '/Java_hard_qn4', component: Java_hard_qn4}, 
    { path: '/Java_hard_qn5', component: Java_hard_qn5}, 

    { path: '/Javascript_easy_qn1', component: Javascript_easy_qn1},
    { path: '/Javascript_easy_qn2', component: Javascript_easy_qn2},
    { path: '/Javascript_easy_qn3', component: Javascript_easy_qn3},
    { path: '/Javascript_easy_qn4', component: Javascript_easy_qn4},
    { path: '/Javascript_easy_qn5', component: Javascript_easy_qn5},

    { path: '/Javascript_med_qn1', component: Javascript_med_qn1},
    { path: '/Javascript_med_qn2', component: Javascript_med_qn2},
    { path: '/Javascript_med_qn3', component: Javascript_med_qn3},
    { path: '/Javascript_med_qn4', component: Javascript_med_qn4},
    { path: '/Javascript_med_qn5', component: Javascript_med_qn5},



    { path: '/Javascript_hard_qn1', component: Javascript_hard_qn1}, 
    { path: '/Javascript_hard_qn2', component: Javascript_hard_qn2}, 
    { path: '/Javascript_hard_qn3', component: Javascript_hard_qn3}, 
    { path: '/Javascript_hard_qn4', component: Javascript_hard_qn4}, 
    { path: '/Javascript_hard_qn5', component: Javascript_hard_qn5}, 


  ],
  mode: 'history',
  scrollBehavior () {
    window.scrollTo(0,0);
  }
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
    store.dispatch('fetchUserProfile')

    database.collection('users').doc(user.uid).onSnapshot(doc => {
      store.commit('setUserProfile', doc.data())
    })
  }
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/log')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
