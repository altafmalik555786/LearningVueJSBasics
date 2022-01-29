<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> <br>
    <router-link to="/login">Login</router-link>    <br>
    <router-link to="/profile/1">Altaf's Profile</router-link>    <br>
    <router-link to="/profile/2">Abdullah's Profile</router-link>    <br>
    <router-link to="/profile/3">Hamad's Profile</router-link>    <br> 
    <router-link to="/notfound">PageNotFound</router-link>    <br>
    <router-view></router-view> -->

    <home />
  </div>
</template>

<script>
import Home from "./components/home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style scoped>
</style>
