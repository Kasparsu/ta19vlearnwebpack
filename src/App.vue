<template>
    <div class="container">
      
    </div>
</template>

<script>
const axios = require('axios');
export default {
    created(){
        let date = new Date();
        let now = date.toISOString();
        setInterval(() => {
            
            axios.get('http://127.0.0.1:8000/api/posts/new?from=' + now).then(({data}) => {
                     if(data.length && data[data.length-1].created_at){
                        console.log(data);
                        now = data[data.length-1].created_at;
                    }
            })
        }, 1000);
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