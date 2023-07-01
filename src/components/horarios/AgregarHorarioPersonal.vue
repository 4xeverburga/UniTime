<template>
  <v-dialog v-model="dialogVisible" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Agregar Horario</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="agregarHorario">
          <v-text-field v-model="descripcion" label="Nombre del Horario"></v-text-field>
          <v-text-field v-model="privacidad" label="Privacidad 0 publico 1 privado"></v-text-field>
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
      descripcion: '',
      privacidad: '',
    };
  },
  methods: {
    agregarHorario() {
      // Convertir el campo privacidad a un entero
      const privacidadInt = parseInt(this.privacidad);

      // Verificar si privacidad es un número válido
      if (isNaN(privacidadInt)) {
        console.error('El número no es válido');
        return;
      }

      // Crear un objeto con los datos del grupo
      const horario = {
        descripcion: this.descripcion,
        flg_privacidad: privacidadInt
      };

      // Realizar la solicitud POST al backend
      axios.post('http://localhost:8080/horariosApi/agregarHorario', horario)
        .then(response => {
          // Manejar la respuesta del backend si es necesario
          console.log(response.data);
          console.log(horario);

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
      this.descripcion = '';
      this.privacidad = '';
    },
  },
};
</script>
