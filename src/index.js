import Vue from 'vue/dist/vue.common.dev';
import 'bulma';


import ItemList from './components/ItemList.vue';
import App from './App.vue';

Vue.component('item-list', ItemList);
Vue.component('app', App);

new Vue({
    el: '#app',
   
});