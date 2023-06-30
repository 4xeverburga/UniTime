<template>
  <v-dialog v-model="dialogVisible" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Agregar Horario</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="agregarHorario">
          <v-text-field v-model="nombreGrupo" label="Nombre del Grupo"></v-text-field>
          <v-text-field v-model="descripcionGrupo" label="Descripción del Grupo"></v-text-field>
          <v-text-field v-model="maxMiembros" label="Número Máximo de Miembros"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="agregarHorario">Agregar</v-btn>
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
      descripcionGrupo: '',
      maxMiembros: '',
    };
  },
  methods: {
    agregarHorario() {
      // Convertir el campo maxMiembros a un entero
      const maxMiembrosInt = parseInt(this.maxMiembros);

      // Verificar si maxMiembrosInt es un número válido
      if (isNaN(maxMiembrosInt)) {
        console.error('El número de miembros no es válido');
        return;
      }

      // Crear un objeto con los datos del grupo
      const grupo = {
        nombre: this.nombreGrupo,
        descripcion: this.descripcionGrupo,
        nro_mienbros: maxMiembrosInt
      };

      // Realizar la solicitud POST al backend
      axios.post('http://localhost:8080/gruposapi/addgrupo', grupo)
        .then(response => {
          // Manejar la respuesta del backend si es necesario
          console.log(response.data);
          console.log(grupo);

          // Cerrar el diálogo después de agregar el grupo
          this.cerrarDialog();
        })
        .catch(error => {
          // Manejar el error en caso de que ocurra
          console.error(error);
        });
    },
    cerrarDialog() {
      this.dialogVisible = false;
      this.nombreGrupo = '';
      this.descripcionGrupo = '';
      this.maxMiembros = '';
    },
  },
};
</script>
