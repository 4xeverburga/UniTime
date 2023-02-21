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
            <v-autocomplete
                chips
                clearable
                deletable-chips
                multiple
                v-model="area_filter_query"
                :items="areas"
                label="Area"
            ></v-autocomplete>
        </v-col>
        <v-col cols="12">
            <v-autocomplete
                chips
                clearable
                deletable-chips
                multiple
                v-model="theme_filter_query"
                :items="themes"
                label="Tema"
            ></v-autocomplete>
        </v-col>
    </v-row>
</template>


<script setup>
import {reactive, ref} from 'vue'

let area_filter_query = ref([])
let theme_filter_query = ref([])
let name_filter = ref("")



let areas = [
    "Area 1",
    "Area 2",
    "Area 3",
]

let themes = [
    "Temas 1",
    "Temas 2",
    "Temas 3",
]


</script>