<template>
  
  <v-app>
    
    <DrawerComp/>

    <v-main>
      <router-view></router-view>
    </v-main>
    
    <footer-comp-vue></footer-comp-vue>

  </v-app>
</template>

<script setup>
import NavBarCompVue from './components/Layout/NavBarComp.vue';
import FooterCompVue from './components/Layout/FooterComp.vue';
import DrawerComp from './components/Layout/DrawerComp.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


/* change the font of the buttons globally to poppins. Make them bold*/
.nav-button{
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: white;
}

</style>
