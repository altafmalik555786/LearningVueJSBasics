<template>
<div>
<button v-on:click="tab='frontend'">Frontend </button>
<button v-on:click="tab='Backend'">Backend</button>
<button v-on:click="tab='FullStack'">FullStack Developer</button>

<component :is="tab" />
    
</div>
</template>

<script>
import Backend from './Backend.vue'
import FullStack from './FullStack.vue'
import frontend from './frontend.vue'

export default {
    name: "Home",
    components: {
        frontend,
        FullStack,
        Backend,
        

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
