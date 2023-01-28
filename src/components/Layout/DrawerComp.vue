<template>
    
    <!-- navbar -->
    <v-app-bar color="primary" class="flex-grow-0" flat app dark>

      <!-- button hamburguer -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- logo -->
      <v-card class="logo" elevation="0" flat>
        <v-img src="src/assets/logo.png"
        height="240"
        width="240"
        ></v-img>
      </v-card>

      <v-card>cscse</v-card>
      <v-app-bar-title>CCAT</v-app-bar-title>  

      <!-- spacer -->
      <v-spacer></v-spacer>

      <v-card class="areas-buttons">
        <v-btn text>Inicio</v-btn>
        <v-btn text>Areas</v-btn>
        <v-btn text>Proyectos</v-btn>
        <v-btn text>Eventos</v-btn>
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
  