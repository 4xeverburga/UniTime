<template>
    <v-dialog v-model="dialogVisible2" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Editar descripción de Grupo</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" @submit.prevent="editarDescripcionGrupo">
            <v-text-field v-model="descripcionGrupo" label="Nueva Descripción del Grupo"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="guardarDescripcion">Guadar</v-btn>
          <v-btn color="error" @click="cerrarDialog">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        dialogVisible2: false,
        nombreGrupo: '',
      };
    },
    methods: {
      cerrarDialog() {
        this.dialogVisible2 = false;
        this.nombreGrupo = '';
      },
    },
  };
  </script>
  