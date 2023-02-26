<template>
<v-card elevation="0">
    <v-card-title>
        <h2>Aliados</h2>
    </v-card-title>
    <v-row
    class="mx-16">
        <v-col cols="4" v-for="(aliado, id) in visible" :key="id">
            <v-card>
                <v-img
                    :src="aliado.img"
                    height="200px"
                ></v-img>
                <v-card-title>
                    <h3>{{ aliado.name }}</h3>
                </v-card-title>
            </v-card>
        </v-col>
    </v-row>

    <v-row class="my-5">
        <v-col class="text-center" cols="12">
            <!-- a pagination linked to "page" -->
            <v-pagination v-model="page.val" :length="pages" circle></v-pagination>
        </v-col>
    </v-row>

</v-card>
</template>

<script setup>
import ProjectItem from '@/components/SearchProjects/ProjectItem.vue';
import QuerySelector from '@/components/SearchProjects/QuerySelector.vue';
import { reactive, computed } from 'vue'

const itemsPerPage = 3
const page = reactive({val: 1})

const items = [
    {id: 1, name: 'Datux Perú'},
    {id: 2, name: 'NEXTECH Education Center'},
    {id: 3, name: 'ACTI'},
    {id: 4, name: 'LEINN'},
    {id: 5, name: 'Data Analytics Center'},
    {id: 6, name: 'WE Educación Ejecutiva'},
    {id: 7, name: 'Educate Perú Consultores'},
    ]

const pages = computed(() => {
    return Math.ceil(items.length / itemsPerPage)
})

const visible = computed(() => {
    console.log('visible')
    
    return items.slice((page.val - 1) * itemsPerPage, page.val * itemsPerPage)
})

</script>
