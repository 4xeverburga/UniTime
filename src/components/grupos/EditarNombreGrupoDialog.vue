<template>
    <v-dialog v-model="dialogVisible" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Editar nombre de Grupo</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" @submit.prevent="editarNombreGrupo">
            <v-text-field v-model="nombreGrupo" label="Nuevo Nombre del Grupo"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="guardarNpmbre">Guadar</v-btn>
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
        dialogVisible: false,
        nombreGrupo: '',
      };
    },
    methods: {
      cerrarDialog() {
        this.dialogVisible = false;
        this.nombreGrupo = '';
      },
    },
  };
  </script>
  