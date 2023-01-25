<template>
    <v-card>
    <v-card-title>
        <h2>AREAS</h2>
    </v-card-title>
    <v-list>
        <v-list-item
            v-for="(name, i) in areas" :key="i" link>
            <v-list-content>
                <v-list-content-tittle>{{ name }}</v-list-content-tittle>
            </v-list-content>

        </v-list-item>
    </v-list>
</v-card>
</template>

<script setup>
import { ref } from 'vue'
const areas = ref([
        'Academica',
        'IDI',
        'Tec. Informacion',
        'GTH',
      ])
</script>
