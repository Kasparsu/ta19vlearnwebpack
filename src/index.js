import Vue from 'vue/dist/vue.common.dev';

import ItemList from './components/ItemList.vue';

Vue.component('item-list', ItemList);

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        click: 0,
        items: [
            {name:'milk', isDone: false, id:0},
            {name:'bread', isDone: true, id:1},
            {name:'vodka', isDone: false, id:2},
        ],
        newItem: ''
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        },
        doneItems() {
            return this.items.filter(item => item.isDone);
            // return this.items.filter(function(item) {
            //     return item.isDone;
            // });
        },
        notDoneItems() {
            return this.items.filter(item => !item.isDone);
            // return this.items.filter(function(item) {
            //     return !item.isDone;
            // });
        }
    },
    methods: {
        addItem() {
            if(this.newItem.trim() !== '') {
                this.items.push({name: this.newItem, isDone: false, id: this.items.length});
                this.newItem = '';
            }
        }
    }
});