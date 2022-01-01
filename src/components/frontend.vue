<template>
<div>

    <h1>Here there are the languages of frontend Developement below</h1>
<button v-on:click="tab='Html'">HTML </button>
<button v-on:click="tab='Css'">CSS</button>
<button v-on:click="tab='Javascript'">JavaScript</button>
<button v-on:click="tab='Bootstrap'">Bootstrap</button>
<button v-on:click="tab='Vuejs'">Vuejs</button>
<button v-on:click="tab='React'">React</button>
<button v-on:click="tab='Angular'">Angular</button>

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
