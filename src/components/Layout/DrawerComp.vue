<template>

    <!-- navbar -->
    <v-app-bar color="primary" class="flex-grow-0" flat app dark>

      <!-- button hamburguer -->
      <v-app-bar-nav-icon class="hamburger" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- logo -->
      <v-card class="logo" elevation="0" flat>
        <v-img src="src/assets/logo.png"
        height="36"
        width="36"
        ></v-img>
      </v-card>

      <v-app-bar-title class="ccat-name">CCAT</v-app-bar-title>  


      <!-- spacer -->
      <v-spacer></v-spacer>


      <v-card class="areas-buttons">
        <v-btn class="nav-button" text>Inicio</v-btn>
        <v-btn class="nav-button" text>Areas</v-btn>
        <v-btn class="nav-button" text>Proyectos</v-btn>
        <v-btn class="nav-button" text>Eventos</v-btn>
      </v-card>

    </v-app-bar>

    <!-- drawer -->
    <v-navigation-drawer  v-model="drawer"
    app fixed clipped temporary
    mini-variant
    expand-on-hover
    left>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Learning Vuetify</v-list-item-title>
          <v-list-item-subtitle> Using Navigation drawers</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </template>

  <script>
  export default {
    name: 'App',
    data: () => ({
      drawer: false,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Account', icon: 'mdi-account-box' },
        { title: 'Settings', icon: 'mdi-cog' },
      ],
    }),
  };
  </script>

  <style scoped>
  /* align text of the name to the left  */
  .ccat-name{
    text-align: left;
    /* max-width: 300px;
    max-height: 200px; */
    /* shorten text size */
    /* font-size: 0.8rem; */
  }
  /* add a margin to the buttons container */
  .areas-buttons{
    margin-right: 40px;
  }
  /* hide the hamburger menu */
  .hamburger{
    display: none;
  }
  /* font size of nav-button is bigger */
  .nav-button{
    text-align: center;
    font-size: 1.5rem;
    min-width: 200px;
    max-width: 400px;
  }
  /* the logo has a left margin of 10 px */
  .logo{
    margin-left: 40px;
  }

  /* when reached mobile dimensions hide .areas-buttons and show the hamburger menu */ 
  @media (max-width: 600px) {
    .areas-buttons{
      display: none;
    }
    .hamburger{
      display: block;
    }
    .logo{
      margin-left: 0px;
    }  
  }
  </style>