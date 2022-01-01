<template>
<div>
    <h1>Here are the languages of backend Below</h1>

    <button v-on:click="tab='Php'">Php </button>
    <button v-on:click="tab='Node'">Node JS</button>
    <button v-on:click="tab='Csharp'">Csharp</button>
    <button v-on:click="tab='Django'">Django</button>
    <button v-on:click="tab='Asp'">ASP.NET</button>

    <component :is="tab" />
    
</div>
</template>

<script>
import Asp from './asp.vue'
import Csharp from './csharp.vue'
import Django from './django.vue'
import Node from './node.vue'
import Php from './php.vue'

export default {
    name: "Home",
    components: {
        Php,
        Node,
        Csharp,
        Django,
        Asp
    },

    data() {
        return {
            tab: '',
        }
    },
    watch: {

    },
    methods: {

    },
    computed: {

    }

}
</script>

<style scoped>

</style>
