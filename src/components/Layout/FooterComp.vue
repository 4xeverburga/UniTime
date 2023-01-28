<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link.id"
        rounded
        flat
        title
        icon
        color="transparent"
        class="my-5 mx-1 white--text"
      >
      <v-icon size="39px">{{ link.icon }}</v-icon>
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
      <v-btn
        v-for="link in links"
        :key="link.id"
        color="red"
        text
        rounded
        class="my-2"
      >
        {{ link.icon }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >

      </v-col>
    </v-row>

    <v-row
      justify="right"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="blue"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >

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
</script>
