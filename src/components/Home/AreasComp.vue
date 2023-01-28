<template>
    <v-card>
    <v-card-title>
        <h2>AREAS</h2>
    </v-card-title>

    <v-row
        no-gutters
        justify="center"
        mb-6
    >
        <v-btn
            v-for="area in areas" :key="area.id" link
            rounded
            flat
            title
            class="my-11 mx-1 text-black"
            size="500px"
        >
        <v-icon size="300px">mdi-numeric-{{area.id}}</v-icon>
        <span size="300px">
        {{ area.name }}
        </span>
        </v-btn>

    </v-row>
</v-card>
</template>

<script setup>
import { ref } from 'vue'
const areas = ref([
        {id: 1, name: 'Academica'},
        {id: 2, name: 'IDI'},
        {id: 3, name: 'Logistica'},
        {id: 4, name: 'Tec. Informacion'},
        {id: 5, name: 'GTH'},
      ])
</script>
