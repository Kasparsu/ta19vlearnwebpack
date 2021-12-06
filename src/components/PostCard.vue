<template>
  <div class="card">
        <div v-if="post.images.length" class="card-image">
            <figure class="image is-4by3">
                <img :src="post.images[0].path" alt="Placeholder image">
            </figure>
        </div>
        <header class="card-header">
            <p class="card-header-title">
                {{post.title}}
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                {{post.snippet}}
            </div>
            <p class="subtitle">
                {{post.user.name}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style>

</style>