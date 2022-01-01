<template>
<div>
    <h2 >Altaf</h2>
    <h2>Hamad</h2>
    <h2>Abdul</h2>
    <h2 v-bind="$attrs">{{data}}</h2>

</div>
</template>

<script>

export default {
   name: 'props',
   props: {
       data: String,
       id: String,
   },
   inheritAttrs: false,
}
</script>

<style scoped>

</style>
