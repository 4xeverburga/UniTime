<template>
    <v-card
        id="title"
    >
        <!-- img -->
        <v-img
            :src="imgSrc"
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
