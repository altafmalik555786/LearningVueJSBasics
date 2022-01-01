<template>
<div>

  <ul>
    <li v-for="item in error" v-bind:key="item">
      <p> {{item}} Not Valid </p>
    </li>
  </ul>

    <label for="">Email: </label>
    <input type="text" placeholder="Enter Your Email" v-model="form.email">
    <br><br>

    <label for="">Password: </label>
    <input type="password" placeholder="Enter Your Password" v-model="form.password">

    <br><br>
    <select v-model="form.country">
        <option>Pakistan</option>
        <option>Turky</option>
        <option>Saudia</option>
    </select>

     <br><br>

     <h2>Technology</h2>

    <label for="js">JS: </label>
    <input type="checkbox" value="JavaScript" id="js" v-model="form.technology">

     <br><br>
    <label for="vue" >Vue JS: </label>
    <input type="checkbox"  value="Vue JS" id="vue" v-model="form.technology">
    <br><br>

    
     <h2>Select Gender Below</h2>

    <label for="male">Male: </label>
    <input type="radio" value="Male" id="male" v-model="form.gender">

     <br><br>
    <label for="fmale" >Female: </label>
    <input type="radio"  value="Female" id="fmale" v-model="form.gender">
    <br><br>

    <button type="button" v-on:click="login">Log In</button>

    <p>Your Data:{{form}} </p>

</div>
</template>

<script>
export default {

    name: "Home",
    components: {

    },

    data() {
        return {
            form: {
                email: '',
                password: '',
                country: '',
                technology: [],
                gender: [],
            },
            error: [],
        }
    },

    methods: {
        login() {
          this.error=[];
          for (const item in this.form) {
            if (this.form[item]==="" || this.form[item].length===0) {
              this.error.push(item)
            }
          }
          if (this.error.length===0) {
            alert("Data has been submited Fully");
          } else {
            alert("Some Data has been submited but not fully")
          }
            console.warn(this.form, this.error);















            
        }
    }

}
</script>

<style scoped>

</style>
