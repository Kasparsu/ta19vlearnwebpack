<template>
    <div class="container">
      
    </div>
</template>

<script>
const axios = require('axios');
export default {
    created(){
        axios.get('http://localhost:8000/api/proxy/timetableByRoom/14?from=2022-01-17T00:00:00Z&room=4250&thru=2022-01-23T00:00:00Z').then(response => {
            console.log(response);
        })
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