<template>
<div>
    <h1> {{name}}</h1>
    <h1>Name is: {{user.name}} and Email is: {{user.email}} </h1>
    <button type="button" v-on:click="getData()">Click me</button>
</div>
</template>

<script>
export default {
    name: 'Child',
    props: {
        name: String,
        user: Object,
        getData: Function
    }
}
</script>
