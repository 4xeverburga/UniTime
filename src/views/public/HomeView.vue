<template>
<div id="conocenos">
    <div class="title">
        <img id="icon"/>
        <h2>CONOCENOS</h2>
    </div>
    <p class="text">
        El Centro Cultural Avanzada Tecnológica (CCAT) es una organización de estudiantes y egresados fundada en la 
        Facultad de Ingeniería Industrial y de Sistemas de la Universidad Nacional de Ingeniería, 
        el 22 de mayo de 1991, como ..... 
    </p>
    <img/>
    <div id="vision">
        <div class="title">
            <h2>VISION</h2>
        </div>
    </div>
    <div id="mision">
        <div class="title">
            <h2>MISION</h2>
        </div>
    </div>
</div>
<Areas></Areas>
<Aliados></Aliados>

</template>

<script setup>
import Areas from '@/components/Home/Areas.vue';
import Aliados from '@/components/Home/Aliados.vue';
</script>

<style>
template{
    font-family: 'Poppins';
}
.text{
    height: 120px;
    width: 800px;
}
</style>