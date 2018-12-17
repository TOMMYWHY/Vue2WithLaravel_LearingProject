
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import  store from './store/index'
import router from './router/index'

import App from './components/App'; //根组件

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(Vuex);


const app = new Vue({
    el: '#app',
    router,
    store,
    // render: h => h(App) // 雨下面两行等效，将App.vue 挂载
    components: { App },
    template: '<App/>'
});
