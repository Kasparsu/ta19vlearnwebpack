<template>
    <div>
        <h1><slot></slot></h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                <input type="checkbox" v-model="item.isDone">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['items']
}
</script>

<style>

</style>