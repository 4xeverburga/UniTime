<template>

  <div id="conocenos">

    <div>
      <h2>Conocenos</h2>
      <p>
        bla bla bla bla bla texto de presentacion
      </p>
    </div>

    <div>
      <!-- <img alt="logo de ccat" src="../../assets/LOGO_CCAT.png"/>`` -->
    </div>
    <div class="row">
      <div class="col-8 text-start p-5">
        <h2 class="display-3">Conocenos</h2>
        <p class="ms-5">
          bla bla bla bla bla texto de presentacion
        </p>
      </div>
      <div class="col-4">
        <img
          class="rounded"
          style="height:300px;"
          src="@/assets/logo.png"
          alt="logo de ccat"
        />
      </div>
      <div class="col-6 text-center">
        <a class="btn btn-outline-dark w-75" role="button" href="#">
          <h2 class="m-0 display-4">Vision</h2>
        </a>
      </div>
      <div class="col-6 text-center">
        <a class="btn btn-outline-dark w-75" role="button" href="#">
          <h2 class="m-0 display-4">Mision</h2>
        </a>
      </div>
    </div>

  </div>

  <div id="areas">
    <h2>Areas</h2>
    <ul>
      lista de areas
    </ul>
  </div>

  <div id="aliados">
    <h2>Aliados</h2>
    <ul>
      Lista de aliados
    </ul>
  </div>

  <!-- use props -->
  <h1>{{ props.msg }}</h1>

</template>

<script setup>
import { defineProps } from 'vue';
// define props
const props = defineProps({
  msg: String
})
</script>
