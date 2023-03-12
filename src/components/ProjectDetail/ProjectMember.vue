<template>
    <v-card
        id="title"
    >
        
        <!-- img -->
        <v-img
            :src="imgSrc"
            :aspect-ratio="1"
            max-width="100%"
            max-height="100%"
            contain
        ></v-img>

        <v-card-title>
            INTEGRANTE
        </v-card-title>
        <v-card-text>
            Descripcion de integrante 

            rol
        </v-card-text>

    </v-card>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Poppins');
@import url('https://fonts.googleapis.com/css?family=Inter');
template {
    font-size: "Inter";
}

/* max dimensions of the v-card */
.v-card {
    max-width: 400px;
    max-height: 800px;
    text-align: center;
}

.v-card-title {
    font-weight: 600;
}

.v-card-text {
    font-weight: 400;
}
</style>


<script setup>

// define props for img-src, title, description, and id
defineProps(['img-src', 'title', 'description', 'id', 'media', 'rol'])
</script>