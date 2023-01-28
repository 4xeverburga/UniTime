<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-card-text 
        v-for="link in links"
        :key="link"
        rounded
        class="my-5 mx-1 white--text"
      >
      <v-icon size="41px">{{ link }}</v-icon>
      </v-card-text>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        <strong>Escribenos</strong>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="red"
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
        'mdi-youtube',
        'mdi-facebook',
        'mdi-instagram',
        'mdi-linkedin',
      ])
</script>
