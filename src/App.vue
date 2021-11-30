<template>
<div>
  <!-- <todo-example></todo-example> -->
    <button class="button is-primary" @click="active=true">Click me</button>
    <button class="button is-primary" @click="active2=true">Click me too</button>
    <modal v-if="active" @close="active=false" img="http://placekitten.com/800/600"></modal>
    <modal v-show="active2" @close="active2=false" img="http://placebear.com/800/600"></modal>
</div>
</template>

<script>
import Modal from './components/Modal.vue'
import TodoExample from './components/TodoExample.vue'
export default {
    components: { TodoExample, Modal },
    data() {
        return {
            active: false,
            active2: false
        }
    }
}
</script>

<style>

</style>