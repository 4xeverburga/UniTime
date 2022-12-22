<template>
    <!-- A sticky navbar with a logo on the left and links on the right for Inicio, Areas, Proyectos and Eventos -->
    <!-- replace <a> with router links and habilitate the cascade menu with an hamburger button -->
    <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="@/assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
                CCAT
            </a>
            <button class="navbar-toggler" @click="toggleNavBar=!toggleNavBar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup" :class="{show: toggleNavBar}">
                <div class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <div class="nav-container" id="find" >
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a class="nav-link" href="#">Areas</a>
                        <a class="nav-link" href="#">Proyectos</a>
                        <a class="nav-link" href="#">Eventos</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
let toggleNavBar = ref(false)
</script>

<style scoped>
.navbar {
    background-color: #D9E8F6;
}
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: right;
    background-color: rgba(51, 132, 186, 0.24);
    /* border: 100px solid #fff; */
    /* rounded corners */
    border-radius: 10px;
}
</style>
x   