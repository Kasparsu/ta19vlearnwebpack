<template>
<div>
  <!-- <todo-example></todo-example> -->
    <button class="button is-primary" @click="active=true">Click me</button>
    <div class="modal" :class="{'is-active': active}">
        <div class="modal-background" @click="active=false"></div>
        <div class="modal-content">
            <p class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
            </p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="active=false"></button>
    </div>
</div>
</template>

<script>
import TodoExample from './components/TodoExample.vue'
export default {
    components: { TodoExample },
    data() {
        return {
            active: false,
        }
    }
}
</script>

<style>

</style>