<template>
    <v-card
        id="title"
    >
        <v-card-title>
            INTEGRANTE
        </v-card-title>
        <v-card-text>
            Descripcion de integrante 
        </v-card-text>
        
        <!-- img -->
        <v-img
            :src="imgSrc"
            :aspect-ratio="1"
            max-width="100%"
            max-height="100%"
            contain
        ></v-img>
    </v-card>
</template>


<script setup>

// define props for img-src, title, description, and id
defineProps(['img-src', 'title', 'description', 'id'])
</script>