<template>
<v-card>
    <v-card-title>
        <h2>Aliados</h2>
    </v-card-title>
    <v-list>
    <v-list-item
        v-for="(alido, id) in aliados" :key="id" link>
        <v-list-content>
            <v-list-content-tittle>{{ aliado.name }}</v-list-content-tittle>
        </v-list-content>

    </v-list-item>
</v-list>
</v-card>
</template>

<script setup>
import { ref } from 'vue'
const aliados = ref([
    {id: 1, name: 'Datux Perú'},
    {id: 2, name: 'NEXTECH Education Center'},
    {id: 3, name: 'ACTI'},
    {id: 4, name: 'LEINN'},
    {id: 5, name: 'Data Analytics Center'},
    {id: 6, name: 'WE Educación Ejecutiva'},
    {id: 7, name: 'Educate Perú Consultores'},
      ])

</script>
