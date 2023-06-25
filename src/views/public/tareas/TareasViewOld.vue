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

    <v-container>
        <v-table>
            <thead>
                <tr>
                    <th class="text-left font-weight-bold">
                        Name
                    </th>
                    <th class="text-left font-weight-bold">
                        Calories
                    </th>
                    <th class="text-left font-weight-bold">
                        Nombre
                    </th>
                    <th>
                        Inspeccionar
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in proyectos" :key="item.name">
                        <td>{{ item.fecha }}</td>
                        <td>{{ item.hora }}</td>
                        <td>{{ item.nombre }}</td>

                        <td>
                            <button >boton</button>
                        </td>
                </tr>
            </tbody>
        </v-table>

    </v-container>

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
    },
    {
        title:'Acciones',
        sortable:false,
        text:'Actions',
        value:'actions',
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

function click(){
    console.log("boton");
}
</script>