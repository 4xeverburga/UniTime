<template>
  <div class="container">
    <div class="left-column">
      <h2>Horarios de Grupos</h2>
      <div class="table-container">
        <v-data-table
          v-model:items-per-page="itemsPerPage"
          :headers="headers2"
          :items="items2"
          class="elevation-1"
          @click:row="rowClick"
        >
      </v-data-table>
      </div>
      <v-btn color="primary" @click="abrirDialog" class="button_agregar">Agregar Grupo</v-btn>
      <agregar-grupo-dialog ref="agregarGrupoDialog"></agregar-grupo-dialog>
    </div>
    <div class="right-column">
      <h2>Horarios personales</h2>
      <div class="table-container">
        <v-data-table
          :href-fn="'/eventos'"
          v-model:items-per-page="itemsPerPage"
          :headers="headers"
          :items="formattedItems"
          class="elevation-1"
        >
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AgregarGrupoDialog from '../../../components/grupos/AgregarGrupoDialog.vue';

export default {
  components: {
    AgregarGrupoDialog,
  },
  data() {
    return {
      itemsPerPage: 5,
      headers: [
        { title: 'Evento', align: 'start', key: 'evento' },
        { title: 'Fecha', align: 'end', key: 'fecha' },
        { title: 'Hora', align: 'end', key: 'hora' },
        { title: 'Grupo', align: 'end', key: 'grupo'}
      ],
      headers2: [
        { title: 'Grupo', align: 'start', key: 'grupo' },
        { title: 'Descripción', align: 'start', key: 'descripcion' },
      ],
      items: [],
      items2: [],
    };
  },
  created() {
    axios.get('http://localhost:8080/gruposapi/getgrupos').then(response => {
      this.items2 = response.data;
      console.log(this.items2);
    }).catch(error => {
      console.error(error);
    });

    axios.get('http://localhost:8080/gruposapi/geteventosgrupos').then(response => {
      this.items = response.data;
      console.log(this.items.hora);
    }).catch(error => {
      console.error(error);
    });
  },
  computed: {
    formattedItems() {
      return this.items.map(item => {
        const fecha = new Date(item.fecha).toLocaleDateString('es-ES');

        return {
          ...item,
          fecha,
        };
      });
    }
  },
  methods: {
    abrirDialog() {
      this.$refs.agregarGrupoDialog.dialogVisible = true;
    },
    rowClick(item,row) {
      // Obtener la información necesaria del item
      const itemName = row.item.raw.cod_grupo

      // Redirigir a la página deseada utilizando el enlace personalizado
      window.location.href = '/grupos/' + itemName;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  height: 100vh;
}

.left-column,
.right-column {
  flex: 1;
  padding-top: 50px;
  padding-right: 10px;
  padding-left: 10px;
}

.left-column {
  background-color: lightblue;
}

.right-column {
  background-color: lightgreen;
}

.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estilos adicionales para ocupar el ancho completo */
.container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.left-column {
  width: 50%;
}

.right-column {
  width: 50%;
}

.button_agregar {
  margin-left: 20px;
  margin-top: 20px;
}

</style>
