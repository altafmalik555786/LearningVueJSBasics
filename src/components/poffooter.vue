<template>
<div>




    <teleport to="#footer">
        <Footer />
    </teleport>

</div>
</template>

<script>
import Footer from './footer.vue'

export default {
    name: "Home",
    components: {
        Footer,
      
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
