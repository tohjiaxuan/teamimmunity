import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HomePage from './components/Homepage.vue'
import About from './components/About.vue'
import Language from './components/Language.vue'

import Python from './components/Arnold/Python.vue'
import Java from './components/Arnold/Java.vue'
import Js from './components/Arnold/Javascript.vue'
import Afterlog from './components/Arnold/Afterlogin.vue'

import Log from './components/Nicole/Login.vue'
import Register from './components/Nicole/Register.vue'
import Account from './components/Nicole/Account.vue'

import CS1010 from './components/JiaXuan/CS1010S.vue'
import Proglang from './components/JiaXuan/Proglang.vue'

import Newlang from './components/Vicki/home.vue'
import Syntax from './components/Vicki/syntax.vue'
import Printing from './components/Vicki/printing.vue'

import Exercise from './components/Exercise.vue'
import Page2 from './components/Charlotte/Page2.vue'
import Page3 from './components/Charlotte/Page3.vue'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter);

const router = new VueRouter ({
  routes: [
    {path: '/', component: HomePage},
    {path: '/about', component: About},
    {path: '/language',component:Language},
    {path: '/python', component:Python},
    {path: '/java', component:Java},
    {path: '/js', component:Js},
    {path: '/reg', component: Register},
    {path: '/log', component: Log},
    {path: '/cs', component:CS1010},
    {path: '/proglang', component:Proglang},
    {path: '/after', component:Afterlog},
    {path: '/newlang', component:Newlang},
    {path: '/syntax', component:Syntax},
    {path: '/printing', component:Printing},
    {path: '/exercise', component:Exercise},
    {path: '/page2', component:Page2},
    {path: '/page3', component:Page3},
    {path: '/after/account', component:Account}
  ],
  mode: 'history',
  scrollBehavior () {
    window.scrollTo(0,0);
  }
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
