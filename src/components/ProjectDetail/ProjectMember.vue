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
        
        <!-- social media sub-component -->
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="2" v-for="(item, id) in social_group" :key="id">
                <v-icon>{{ item.icon }}</v-icon>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>

        <div class = "margin"></div>
    </v-card>
</template>

<script setup>

// define props for img-src, title, description, and id
defineProps(['img-src', 'title', 'description', 'id', 'media', 'rol'])

const social_media = [
    {media: "facebook", link: "https://www.facebook.com/"},
    {media: "instagram", link: "https://www.instagram.com/"},
    {media: "twitter", link: "https://twitter.com/"},
    {media: "linkedin", link: "https://www.linkedin.com/"},
]
const social_group = [
    {icon: "mdi-facebook", link: "https://www.facebook.com/"},
    {icon: "mdi-instagram", link: "https://www.instagram.com/"},
    {icon: "mdi-twitter", link: "https://twitter.com/"},
    {icon: "mdi-linkedin", link: "https://www.linkedin.com/"},
]


</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Poppins');
@import url('https://fonts.googleapis.com/css?family=Inter');
template {
    font-size: "Inter";
}

/* max dimensions of the v-card */
.v-card {
    /* max-width: 400px; */
    max-height: 800px;
    text-align: center;
    align-self: center;
}

.v-card-title {
    font-weight: 600;
}

.v-card-text {
    font-weight: 400;
}

.margin {
    margin-top: 20px;
}
</style>

