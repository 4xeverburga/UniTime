<template>
  <v-footer
    color="#1B263B"
    padless
  >
    <v-row
      justify="center"
      no-gutters
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
        class="white--text my-5 mx-1"
      >
      <v-icon size="41px">{{ link.icon }}</v-icon>
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        <strong>Escribenos!</strong>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        v-for="contact in contacts"
        :key="contact.id"
        flat
        color="transparent"
        class="my-5 mx-1 white--text"
        text
        center
        rounded
      >
      <v-card-text
        class="white--text"
        >
        <v-icon> {{ contact.icon }} </v-icon>
        {{ contact.description }}
      </v-card-text>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue'
const links = ref([
      {id: 1, icon: 'mdi-youtube', url: "https://www.youtube.com/@CCATFIIS"},
      {id: 2, icon: 'mdi-facebook', url: ""},
      {id: 3, icon: 'mdi-instagram', url: ""},
      {id: 4, icon: 'mdi-linkedin', url: ""},
      ])
const contacts = ref([
      {id: 1, icon: 'mdi-map', description: 'Facultad de Ingeniería Industrial y de Sistemas - UNI, Rímac 15333 Lima, Perú'},
      {id: 2, icon: 'mdi-clock', description: 'Lun-Vie 8:30 - 21:00'},
      {id: 3, icon: 'mdi-mail', description: 'ccat.fiis@uni.edu.pe'},
])
</script>
