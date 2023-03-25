<template>
    <v-card
    id="title"
    elevation="0"
    >

            <!-- img -->
            <div class="square">
                <v-img
                    class="rounded-circle"
                    src="https://www.allthingsdogs.com/wp-content/uploads/2020/01/Chow-Chow-Feature-678x381.jpg"
                    max-width="100%"
                    max-height="100%"
                    contain
                ></v-img>

            </div>

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
            <v-btn
                v-for="(item, id) in social_group"
                :key="id"
                :href="item.link"
                cols="2"
                flat
                icon
                title
                color="transparent"
                target="_plank"
                >
                <v-icon>mdi-{{ item.icon }}</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
        </v-row>

        <div class = "margin"></div>
    </v-card>
</template>

<script setup>

// define props for img-src, title, description, and id
defineProps(['img-src', 'title', 'description', 'id', 'media', 'rol'])

const social_group = [
    {icon: "facebook", link: "https://www.facebook.com/"},
    {icon: "instagram", link: "https://www.instagram.com/"},
    {icon: "twitter", link: "https://twitter.com/"},
    {icon: "linkedin", link: "https://www.linkedin.com/"},
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

