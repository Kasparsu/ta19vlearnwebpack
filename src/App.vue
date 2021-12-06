<template>
    <div class="container">
       <input type="text" class="input" v-model="message" @keydown.enter="sendMessage">
       <ul>
           <li v-for="(message, key) in messages" :key="key" class="mt-3">
                <span class="tag is-primary is-light is-size-3">{{message}}</span>
           </li>
       </ul>
    </div>
</template>

<script>

export default {
    created(){
        // Create WebSocket connection.
        this.ws = new WebSocket('ws://localhost:3333');

        // Connection opened
        this.ws.addEventListener('open', this.onOpen);

        // Listen for messages
        this.ws.addEventListener('message', this.onMessage);
    },
    data() {
        return {
          ws: null,
          message: '',
          messages: []
        }
    },
    methods: {
        onOpen(event) {
            
        },
        onMessage(event){
            console.log('Message from server ', event.data);
            this.messages.push(event.data);
        },
        sendMessage(){
            this.ws.send(this.message);
            this.message = '';
        }
    }
}
</script>

<style>

</style>