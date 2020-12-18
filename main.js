import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'
 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vuetify from './plugins/vuetify';

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://trast-6190b.firebaseio.com/'

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
});