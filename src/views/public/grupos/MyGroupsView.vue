<template>
  <div class="container">
    <div class="left-column">
      <!-- Contenido de la mitad izquierda -->
      <h2>Grupos</h2>
      <div class="table-container">
        <v-data-table
          v-model:items-per-page="itemsPerPage"
          :headers="headers2"
          :items="items2"
          item-value="name2"
          class="elevation-19"
        ></v-data-table>
      </div>
      <!-- Agrega aquí el contenido que desees para la mitad izquierda -->
    </div>
    <div class="right-column">
      <h2>Eventos Grupales</h2>
      <div class="table-container">
        <v-data-table
          v-model:items-per-page="itemsPerPage"
          :headers="headers"
          :items="items"
          item-value="name"
          class="elevation-19"
        ></v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      itemsPerPage: 5,
      headers: [
        {
          text: 'Eventos Grupales',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Evento', align: 'end', value: 'evento' },
        { text: 'Fecha', align: 'end', value: 'fecha_inicio' },
        { text: 'Hora', align: 'end', value: 'hora_inicio' },
        { text: 'Grupos', align: 'end', value: 'grupo' },
      ],
      headers2: [
        {
          text: 'Grupos',
          align: 'start',
          sortable: false,
          value: 'name2',
        },
        { text: 'Grupo', align: 'end', value: 'grupo' },
        { text: 'Descripción', align: 'end', value: 'descripcion' },
      ],
      items: [],
      items2: [],
    };
  },
  created() {
    axios.get('localhost').then(response => {
      this.items = response.data.eventos;
      this.items2 = response.data.grupos;
      console.log(response.data);
    });
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

.left-column, .right-column {
  flex: 1;
  padding-top: 30px;
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

</style>
