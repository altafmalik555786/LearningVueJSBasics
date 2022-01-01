<template>
<div>
<button v-on:click="show=!show">Toggle</button>


<unmount v-if="show" />
</div>
</template>

<script>
import unmount from './unmount.vue'
export default {
    name: "Home",

    components: {
        unmount

    },

    data() {
        return {
            show: true,
        }
    }

}
</script>

<style scoped>

</style>
