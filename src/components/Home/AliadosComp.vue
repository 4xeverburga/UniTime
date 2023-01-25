<template>
<v-card>
    <v-card-title>
        <h2>Aliados</h2>
    </v-card-title>
    <v-list>
    <v-list-item
        v-for="(name, i) in aliados" :key="i" link>
        <v-list-content>
            <v-list-content-tittle>{{ name }}</v-list-content-tittle>
        </v-list-content>

    </v-list-item>
</v-list>
</v-card>
</template>

<script setup>
import { ref } from 'vue'
const aliados = ref([
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ])

</script>
