<template>
  <v-footer
    color="#1B263B"
    padless
    center
  >
    <v-col
		cols="3"
        justify="center"
        no-gutters
    >
        <v-row
			class="d-flex justify-center"
		>
          <v-btn
                v-for="link in links"
                :key="link.id"
                :href="link.url"
                target="_plank"
                rounded
                flat
                title
                icon
                color="transparent"
                class="text-white my-5 mx-1"
            >
                <v-icon size="41px" color="white">{{ link.icon }}</v-icon>
            </v-btn>
        </v-row>

    </v-col>

    <v-row
        justify="center"
        class="text-white d-flex"
    >
            <v-card
                v-for="contact in contacts"
                :key="contact.id"
                flat
                color="transparent"
                max-width="60%"
                class=" footer-contact my-5 mx-1 text-white"
                text
            >
                <v-card-text
                    class="text-white"
                    color="white"
                >
                    <v-icon > {{ contact.icon }} </v-icon>
                    {{ contact.description }}
                </v-card-text>
            </v-card>
    </v-row>

  </v-footer>
</template>

<style scoped>
template {
font-family: 'Open Sans';
}
/* .v-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} */
</style>

<script setup>
import { ref } from 'vue'
const links = ref([
{ id: 1, icon: 'mdi-youtube', url: "https://www.youtube.com/@CCATFIIS" },
{ id: 2, icon: 'mdi-facebook', url: "https://www.facebook.com/ccat.pe/" },
{ id: 3, icon: 'mdi-instagram', url: "https://www.instagram.com/ccat.pe/?hl=en" },
{ id: 4, icon: 'mdi-linkedin', url: "https://www.linkedin.com/company/ccatpe?originalSubdomain=pe" },
])
const contacts = ref([
{ id: 1, icon: 'mdi-map-marker', description: 'Facultad de Ingeniería Industrial y de Sistemas - UNI, Rímac 15333 Lima, Perú' },
{ id: 2, icon: 'mdi-clock', description: 'Lun-Vie 8:30 - 21:00' },
{ id: 3, icon: 'mdi-email', description: 'kekeros@uni.edu.pe' },
// { id: 4, icon: 'mdi-phone', description: '(01) 626-2000 anexo 1111' },
// { id: 5, icon: 'mdi-whatsapp', description: '943 000 000'}
])
</script>
