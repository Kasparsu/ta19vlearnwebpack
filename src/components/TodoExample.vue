<template>
    <div>
        <input type="text" v-model="message">
        {{reversedMessage}}
        {{click}} <button @click="click++">click me</button>
        <br>
        <input type="text" v-model="newItem" @keydown.enter="addItem">
        <button @click="addItem">Add</button>

        
        <item-list :items="items"><i>All items</i></item-list>
        <item-list :items="doneItems">Done items</item-list>
        <item-list :items="notDoneItems">Not done items</item-list>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello Vue!',
            click: 0,
            items: [
                {name:'milk', isDone: false, id:0},
                {name:'bread', isDone: true, id:1},
                {name:'vodka', isDone: false, id:2},
            ],
            newItem: ''
        }
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
}
</script>

<style>

</style>