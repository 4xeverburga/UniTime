<template>
  <div class="container">
    <div class="left-column">
      <h2>Horarios Personales</h2>
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
      <v-btn color="#3F51B5" @click="abrirDialog" class="button_agregar">Agregar horario personal</v-btn>
      <agregar-horario-personal ref="AgregarHorarioPersonal"></agregar-horario-personal>
    </div>
    <div class="right-column">
      <h2>Horarios Grupales</h2>
      <div class="table-container">
        <v-data-table
          v-model:items-per-page="itemsPerPage"
          :headers="headers"
          :items="formattedItems"
          class="elevation-1"
          @click:row="rowClick"
        >
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AgregarHorarioPersonal from '../../../components/horarios/AgregarHorarioPersonal.vue';

export default {
  components: {
    AgregarHorarioPersonal,
  },
  data() {
    return {
      itemsPerPage: 5,
      headers: [
        { title: 'Grupo', align: 'start', key: 'nombre' },
        { title: 'Descripcion Horario', align: 'start', key: 'descripcion' },
        { title: 'Eventos', align: 'end', key: 'conta' }
      ],
      headers2: [
        { title: 'Horario', align: 'start', key: 'descripcion' },
        { title: 'Eventos', align: 'end', key: 'conta' },
      ],
      items: [],
      items2: [],
    };
  },
  created() {
    axios.get('http://localhost:8080/horariosApi/').then(response => {
      this.items2 = response.data;
      console.log(this.items2);
    }).catch(error => {
      console.error(error);
    });

    axios.get('http://localhost:8080/horariosApi/personalHorarios').then(response => {
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
      this.$refs.AgregarHorarioPersonal.dialogVisible = true;
    },
    rowClick(item,row) {
      // Obtener la información necesaria del item
      const itemName = row.item.raw.cod_horario

      // Redirigir a la página deseada utilizando el enlace personalizado
      window.location.href = '/horario/' + itemName;
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
  background-color: rgb(165, 126, 238);
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
