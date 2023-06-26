<template>
  <div class="container">
    <div class="left-column">
      <h2>Mis Grupos</h2>
      <div class="table-container">
        <v-data-table
          v-model:items-per-page="itemsPerPage"
          :headers="headers2"
          :items="items2"
          item-value="cod_grupo"
          class="elevation-1"
        >
          <template #item="{ item }">
            <router-link :to="'/grupo/' + item.cod_grupo">
              <tr>
                <td>{{ item.grupo }}</td>
                <td>{{ item.descripcion }}</td>
              </tr>
            </router-link>
          </template>
        </v-data-table>
      </div>
      <v-btn color="primary" @click="abrirDialog" class="button_agregar">Agregar Grupo</v-btn>
      <agregar-grupo-dialog ref="agregarGrupoDialog"></agregar-grupo-dialog>
    </div>
    <div class="right-column">
      <h2>Mis Eventos</h2>
      <div class="table-container">
        <v-data-table
          v-model:items-per-page="itemsPerPage"
          :headers="headers"
          :items="formattedItems"
          class="elevation-1"
        >
          <template #item="{ item }">
            <router-link :to="'/evento/' + item.eventoId">
              <tr>
                <td>{{ item.evento }}</td>
                <td>{{ item.fecha }}</td>
                <td>{{ item.hora }}</td>
                <td>{{ item.grupo }}</td>
              </tr>
            </router-link>
          </template>
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
        { title: 'Evento', align: 'end', key: 'evento' },
        { title: 'Fecha', align: 'end', key: 'fecha' },
        { title: 'Hora', align: 'end', key: 'hora' },
        { title: 'Grupo', align: 'end', key: 'grupo'}
      ],
      headers2: [
        { title: 'Grupo', align: 'end', key: 'grupo' },
        { title: 'Descripción', align: 'end', key: 'descripcion' },
      ],
      items: [],
      items2: [],
    };
  },
  created() {
    axios.get('http://localhost:8080/getgrupos').then(response => {
      this.items2 = response.data;
      console.log(this.items2);
    }).catch(error => {
      console.error(error);
    });

    axios.get('http://localhost:8080/geteventosgrupos').then(response => {
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
  padding-top: 10%;
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
