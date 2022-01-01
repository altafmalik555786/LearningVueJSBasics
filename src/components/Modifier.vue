<template>
<div>
  <input type="text" name="" id="" v-model="data">
  <h2>Data is: {{data}} </h2>
  <br><br>

  
  <h2>Lazy Binding Modifier</h2>
  <input type="text" name="" id="" v-model.lazy="dataLazy">
  <h2>Data is: {{dataLazy}} </h2>

  <br><br>


  <h2>Trim Binding Modifier</h2>
  <input type="text" name="" id="" v-model.trim="datatrim">
  <h2>Data is: {{datatrim}} </h2>
  <br><br>


  <h2>Input Type Number Binding Modifier</h2>
  <input type="number" name="" id="" v-model="datatnum">
  <h2>Data is: {{datatnum}} </h2>
  <br><br>


  <h2>Input Type? Binding Modifier</h2>
  <input type="text" name="" id="" v-model.number.lazy="datatype">
  <h2>Data is: {{ typeof datatype}} </h2>
  <h2>Data is: {{ datatype}} </h2>


</div>
</template>

<script>
export default {

    name: "Home",
    components: {
        

    },

    data() {
        return {
          data: '',
          dataLazy: '',
          datatrim: '',
          datatnum: '',
          datatype: '',
        }
    },

    methods: {
        
    }

}
</script>

<style scoped>

</style>
