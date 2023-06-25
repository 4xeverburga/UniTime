<template>
    <v-card-title class="d-flex align-center">
      <v-icon class="mr-2">mdi-account-group</v-icon>
      <h2 class="group-name">Trabajo de DBD</h2>
    </v-card-title>

    <v-card class="mx-4" elevation="0" flat>
      <v-card-title>
        <h5 class="group-role">Rol en el grupo: ADMINISTRADOR</h5>
      </v-card-title>
    </v-card>


    <v-card-title>
        <h4 class="group-description"><b>Descripción del grupo:</b></h4>
    </v-card-title>

    <v-container fluid>
        <v-row justify="start">
        <v-col cols="12" sm="6">
            <v-card class="group-description-box">
            <p class="group-description">
                Grupo formado por estudiantes que están llevando el curso de Diseño de Base de Datos, para la elaboración de un prototipo en base a la gestión de horarios.
            </p>
            </v-card>
        </v-col>
        </v-row>
    </v-container>

    <!-- a table with tile "Proyectos del grupo" and columns fecha,hora y nombre de proyecto -->
    <v-card-title>
        <h4 class="group-description"><b>Proyectos del grupo:</b></h4>
    </v-card-title>
    <v-data-table
    v-model:items-per-page="itemsPerPage_proyectos"
    :headers="headers_proyectos"
    :items="items"
    item-value="name"
    class="elevation-1"
  ></v-data-table>
</template>

<script setup>
const itemsPerPage_proyectos = 5
const headers_proyectos = [
    {
        title: 'Fecha',
        align: 'start',
        sortable: false,
        key: 'fecha',
    },
    {
        title: 'Hora',
        align: 'start',
        sortable: false,
        key: 'hora',
    },
    {
        title: 'Nombre',
        align: 'start',
        sortable: false,
        key: 'nombre',
    }
]
const proyectos = [
    {
        fecha: '10/10/2021',
        hora: '10:00',
        nombre: 'Proyecto 1'
    },
    {
        fecha: '10/10/2021',
        hora: '10:00',
        nombre: 'Proyecto 2'
    },
    {
        fecha: '10/10/2021',
        hora: '10:00',
        nombre: 'Proyecto 3'
    }
]
</script>