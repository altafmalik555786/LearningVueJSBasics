<template>
<div>

    <h1>Post Method API</h1>


    <input type="text" name="email" placeholder="Enter Your Emal" v-model="email"> <br><br>
    <input type="password" name="email" placeholder="Enter Your Password" v-model="password" > <br> <br>
    <button type="button" v-on:click="addUser()">Add User</button>
   

</div>
</template>

<script>
import axios from 'axios'
export default {

    name: 'App',
    components: {

    },
    data() {
        return {
            email: '',
            password: '',
        } 
        
    },
    methods: {
       async addUser() {
            console.warn("Hey", this.email, this.password);
           let result = await axios.post("http://localhost:3000/user", {
               email: this.email,
               password: this.password
            });
            console.warn("Result is: ", result);
        }
    }


}
</script>

<style scoped>


</style>
