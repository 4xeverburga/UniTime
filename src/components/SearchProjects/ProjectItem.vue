<template>
    <v-card
        id="title"
    >
        <v-card-title>
            NOMBRE DEL AREA
        </v-card-title>
        <v-card-text>
            Breve descripcion del area
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