<template>
<div>

    <h1>Life Cycle of Componenets{{name}} </h1>
    <p ref="count">{{counter}} </p>
    <button v-on:click="counter=counter+1">Increment</button>

</div>
</template>

<script>
export default {
    name: "Home",

    beforeCreate() {
        alert("beforeCreate");
    },
    created() {
        this.name = " Malik",
            alert('created component');

    },
    components: {

    },

    data() {
        console.warn("created component");
        return {
            name: 'Altaf Malik',
            counter: 0,
        }
    },
    watch: {

    },
    methods: {

    },
    computed: {

    },
    beforeMount() {
        console.warn("beforeMount", this.$el);
    },
    mounted() {
        console.warn("mounted", this.$el);
    },
    beforeUpdate() {
        console.warn("beforeUpdate", this.$refs['count'].textContent);
    },
    updated() {
      console.warn("Updated", this.$refs['count'].textContent)

    }

}
</script>

<style scoped>

</style>
