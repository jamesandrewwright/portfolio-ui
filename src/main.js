// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Home from './components/Home';
import auth from './auth';
import Login from './components/Login.vue';
import pageHeader from './components/pageHeader.vue';
import contentBlock from './components/contentBlock.vue';
import sectionHeader from './components/sectionHeader.vue';

auth.checkAuth();

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
  { path: '/home', component: Home },
  { path: '/login', component: Login }
];

Vue.config.productionTip = false;
Vue.use(VueResource);

Vue.component('page-header', pageHeader);
Vue.component('section-header', sectionHeader);
Vue.component('content-block', contentBlock);

export const router = new VueRouter({
  routes
});

/*eslint-disable */
const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
/*eslint-enable */
