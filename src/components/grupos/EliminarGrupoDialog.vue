<template>
    <v-dialog v-model="dialogVisible3" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Advertencia</span>
        </v-card-title>
        <v-card-text>
          ¿Está seguro que desea eliminar permanentemente este grupo?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="confirmarEliminar">Eliminar</v-btn>
          <v-btn color="red darken-2" text @click="cerrarDialog">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        dialogVisible3: false,
      };
    },
    methods: {
      cerrarDialog() {
        this.dialogVisible3 = false;
      },
    },
  };
  </script>
  