<template>
  <div id="app">
    <router-link to="/">Home</router-link> <br />
    <router-link to="/login">Login</router-link> <br />
    <router-link to="/profile/1">Altaf's Profile</router-link> <br />
    <router-link to="/profile/2">Abdullah's Profile</router-link> <br />
    <router-link to="/profile/3">Hamad's Profile</router-link> <br />
    <router-link to="/notfound">PageNotFound</router-link> <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
</style>
