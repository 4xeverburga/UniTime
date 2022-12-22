<template>
  <!-- <nav> -->
  <!--   <router-link to="/">Home</router-link> | -->
  <!--   <router-link to="/about">About</router-link> -->
  <!-- </nav> -->
  <v-app>
    <nav-bar-comp-vue></nav-bar-comp-vue>
    <v-main>
      <!-- <HelloWorld /> -->
      <router-view></router-view>
    </v-main>
  <footer-comp-vue></footer-comp-vue>

  </v-app>
</template>

<script setup>
import NavBarCompVue from './components/Layout/NavBarComp.vue';
import FooterCompVue from './components/Layout/FooterComp.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
