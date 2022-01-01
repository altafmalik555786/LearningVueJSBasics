<template>
<div>
    <h1>Watchers</h1>
    <p>{{counter}} </p>
    <button v-on:click="counter=counter+1">+</button>
    <button v-on:click="counter=counter-1">-</button>




</div>
</template>

<script>
export default {
    name: "Home",
    components: {

    },
    data() {
        return {
            counter:0
        }
    },
    watch: {
      counter(val, prev) {
        if (val > 5 && val > prev) {
          alert("stop increasing")
          this.counter = 0;
        }
      }
    },
    methods: {
       
    },
    computed: {
       
    }

}
</script>

<style scoped>

</style>
