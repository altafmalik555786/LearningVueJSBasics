<template>
<div>
    <h1>Computed Properties</h1>

    <h4>{{(dollors*rupees) - less}}
        <!---Data Property has less speed than computed property-->
    </h4>
    <h3>{{getDataMethods()}}
        <!---Data Property has less speed than computed property-->
    </h3>
    <h2>{{getDataComputed}}
        <!----Data Property has less speed than computed property-->
    </h2>

</div>
</template>

<script>
export default {
    name: "Home",
    components: {

    },
    data() {
        return {
            dollors: 1000,
            rupees: 160,
            less: 100,
        }
    },

    methods: {
        getDataMethods() {
          return [this.dollors * this.rupees] - this.less;
        }
    },
    computed: {
        getDataComputed() {
            return (this.dollors * this.rupees) - this.less;
        }
    }

}
</script>

<style scoped>

</style>
