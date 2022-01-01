<template>
<div>

    <h1>Slots of Vue Js and this is the heading</h1>

    <slots>
        <h1>Web Projects</h1>
    </slots>

    <br><br><br><br>
    <h1>Accessing data from child components</h1>
    <slots></slots>

    <slots><a href="#">Learn setup by setup</a></slots>
    <slots><img src="../assets/logo.png" alt=""></slots>

    <h1>Multiple slots with name slots</h1>

    <slots>

        
        <template v-slot:header>
            <h1>Altaf</h1>
        </template>

        <template v-slot:main>
            <p>Here is the details of the Vue JS Product</p>
        </template>

        <template v-slot:footer>
            <button>Buy Now!</button>
        </template>
        
    </slots>
    <slots>

        
        <template v-slot:header>
            <h1>Altaf</h1>
        </template>

        <template v-slot:main>
            <p>Here is the details of the Vue JS Product</p>
        </template>

        <template v-slot:footer>
        </template>
        
    </slots>

</div>
</template>

<script>
import Slots from './slots.vue'
export default {
    name: "Home",
    components: {
        Slots

    },
    data() {
        return {

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
