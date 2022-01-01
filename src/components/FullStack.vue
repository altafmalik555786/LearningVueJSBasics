<template>
<div>
    <h1>Here are the languages of backend Below</h1>
    <button v-on:click="tab='Html'">HTML </button>
    <button v-on:click="tab='Css'">CSS</button>
    <button v-on:click="tab='Javascript'">JavaScript</button>
    <button v-on:click="tab='Bootstrap'">Bootstrap</button>
    <button v-on:click="tab='Vuejs'">Vuejs</button>
    <button v-on:click="tab='React'">React</button>
    <button v-on:click="tab='Angular'">Angular</button>
    <button v-on:click="tab='Php'">Php </button>
    <button v-on:click="tab='Node'">Node JS</button>
    <button v-on:click="tab='Csharp'">Csharp</button>
    <button v-on:click="tab='Django'">Django</button>
    <button v-on:click="tab='Asp'">ASP.NET</button>

    <component :is="tab" />

</div>
</template>

<script>
import Angular from './angular.vue'
import Bootstrap from './bootstrap.vue'
import Css from './css.vue'
import Html from './html.vue'
import Javascript from './javascript.vue'
import React from './react.vue'
import Vuejs from './vuejs.vue'
import Asp from './asp.vue'
import Csharp from './csharp.vue'
import Django from './django.vue'
import Node from './node.vue'
import Php from './php.vue'

export default {
    name: "Home",
    components: {
         Html,
        Css,
        Bootstrap,
        Javascript,
        Vuejs,
        React,
        Angular,
        
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
