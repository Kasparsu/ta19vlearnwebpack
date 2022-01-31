<template>
    <div class="container">
      
    </div>
</template>

<script>
const axios = require('axios');
export default {
    created(){
        axios.interceptors.response.use((response) => response, (error) => {
            if (typeof error.response === 'undefined') {
               
            }
            return Promise.reject(error)
        })
        this.longPoll();
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
        },
        async longPoll(){
            let date = new Date();
            let now = date.toISOString();
            while(true){
                    await axios.get('http://127.0.0.1:8000/api/posts/new/long?from=' + now).then(({data})=> {
                        if(data.length && data[data.length-1].created_at){
                            console.log(data);
                            now = data[data.length-1].created_at;
                        }
                    }).catch(err => {

                    });
  
            }
        }
    }
}
</script>

<style>

</style>