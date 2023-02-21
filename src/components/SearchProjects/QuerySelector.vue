<template>
 <!-- a search bar that filters the items in the carousel
 with a button for saving the query -->
    <v-row class="mx-0">
        <v-col cols="12">
            <v-text-field
                v-model="name_filter"
                label="Nombre del proyecto"
                outlined
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-select
                v-model="area_filter_query"
                :items="areas"
                label="Area"
                multiple
                outlined
            ></v-select>
        </v-col>
        <v-col cols="12">
            <v-select
                v-model="theme_filter_query"
                :items="themes"
                label="Tema"
                multiple
                outlined
            ></v-select>
        </v-col>
        <v-col cols="12">
            <v-btn
                color="primary"
                @click="addAreaFilter"
            >Agregar filtro</v-btn>
        </v-col>
    </v-row>
</template>


<script setup>

let area_filter_query = []
let theme_filter_query = []
let name_filter = ''

let areas = [
    { id: 1, name: 'Area 1' },
    { id: 2, name: 'Area 2' },
    { id: 3, name: 'Area 3' },
    { id: 4, name: 'Area 4' },
    { id: 5, name: 'Area 5' },
    { id: 6, name: 'Area 6' },
    { id: 7, name: 'Area 7' },
    { id: 8, name: 'Area 8' },
    { id: 9, name: 'Area 9' },
    { id: 10, name: 'Area 10' },
    { id: 11, name: 'Area 11' },
    { id: 12, name: 'Area 12' },
    { id: 13, name: 'Area 13' },
    { id: 14, name: 'Area 14' },
    { id: 15, name: 'Area 15' },
    { id: 16, name: 'Area 16' },
    { id: 17, name: 'Area 17' },
    { id: 18, name: 'Area 18' },
    {id:19, name: 'Area 19'}
]

let themes = [
    { id: 1, name: 'Tema 1' },
    { id: 2, name: 'Tema 2' },
    { id: 3, name: 'Tema 3' },
    { id: 4, name: 'Tema 4' },
    { id: 5, name: 'Tema 5' },
    { id: 6, name: 'Tema 6' },
    { id: 7, name: 'Tema 7' },
    { id: 8, name: 'Tema 8' },
    { id: 9, name: 'Tema 9' },
    { id: 10, name: 'Tema 10' },
    { id: 11, name: 'Tema 11' },
    { id: 12, name: 'Tema 12' },
    { id: 13, name: 'Tema 13' },
    { id: 14, name: 'Tema 14' },
    { id: 15, name: 'Tema 15' },
    { id: 16, name: 'Tema 16' },
    { id: 17, name: 'Tema 17' },
    { id: 18, name: 'Tema 18' },
    {id:19, name: 'Tema 19'}
]

function addAreaFilterQuery(area) {
    area_filter_query.push(area)
}

function addThemeFilterQuery(theme) {
    theme_filter_query.push(theme)
}

function addNameFilterQuery(name) {
    name_filter = name
}

function deleteAreaFilterQuery(area) {
    area_filter_query = area_filter_query.filter((item) => item !== area)
}
function deleteThemeFilterQuery(theme) {
    theme_filter_query = theme_filter_query.filter((item) => item !== theme)
}

</script>