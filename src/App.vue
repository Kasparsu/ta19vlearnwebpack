<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="post in posts" :key="post.id">
                <post-card :post="post"></post-card>
            </div>
        </div>
    </div>
</template>

<script>
import PostCard from './components/PostCard.vue';
const axios = require('axios');
export default {
  components: { PostCard },
    created(){
        axios.get('http://localhost:8000/api/posts').then(response => {
            console.log(response);
            this.posts = response.data;
        });
    },
    data() {
        return {
          posts: []
        }
    }
}
</script>

<style>

</style>