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
          <v-btn color="primary" @click="guardarDescripcion">Guardar</v-btn>
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
      descripcionGrupo: "",
    };
  },
  methods: {
    guardarDescripcion() {
      const descripcionGrupoEdit = {
        descripcion: this.descripcionGrupo,
        cod_grupo: this.$route.params.id,
      };

      // Realizar la solicitud POST al backend
      axios
        .post("http://localhost:8080/gruposapi/editardescripciongrupo", descripcionGrupoEdit)
        .then((response) => {
          // Manejar la respuesta del backend si es necesario
          console.log(response.data);
          console.log(descripcionGrupoEdit);

          // Cerrar el diálogo después de guardar el nombre
          this.cerrarDialog();

          // Llamar al método de actualización de grupos en el componente padre
          this.$emit("grupoEditado");
        })
        .catch((error) => {
          // Manejar el error en caso de que ocurra
          console.error(error);
        });
    },
    cerrarDialog() {
      this.dialogVisible2 = false;
      this.nombreGrupo = "";
    },
  },
};
</script>
  