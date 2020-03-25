import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

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
import Question1 from './components/Charlotte/Question1.vue'
import Question2 from './components/Charlotte/Question2.vue'
import Question3 from './components/Charlotte/Question3.vue'
import Question4 from './components/Charlotte/Question4.vue'
import Question5 from './components/Charlotte/Question5.vue'

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

    {path: '/language',component:Language},
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
    {path: '/module', component:Proglang},
    
    {path: '/btn', component:btn},
    {path: '/diff1', component:diff1},
    {path: '/diff2', component:diff2},
    {path: '/diff3', component:diff3},
    
    {path: '/account', component:Afterlog, meta: {requiresAuth: true}},
    {path: '/account/edit', component:Account}, 

    { path:'/page1', component: Page1},
    { path: '/qn1', component: Question1},
    { path: '/qn2', component: Question2},
    { path: '/qn3', component: Question3},
    { path: '/qn4', component: Question4},
    { path: '/qn5', component: Question5}

  ],
  mode: 'history',
  scrollBehavior () {
    window.scrollTo(0,0);
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (firebase.auth.currentUser) {
      next();
    } else {
      next({ path: '/log' });
    }
  }
  next();
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
