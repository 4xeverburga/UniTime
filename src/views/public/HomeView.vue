<template>
<v-card id="conocenos">

    <v-card-title>
        <img id="icon"/>
        <h2>CONOCENOS</h2>
    </v-card-title>

    <v-card-text>
        <p>
            El Centro Cultural Avanzada Tecnológica (CCAT) es una organización de estudiantes y egresados fundada en la 
            Facultad de Ingeniería Industrial y de Sistemas de la Universidad Nacional de Ingeniería, 
            el 22 de mayo de 1991, como ..... 
        </p>
    </v-card-text>

    <v-img 
        id="conocenos-logo"
        lazy-src="src/assets/patata.jpg"
        height="240"
        width="240"
        src="src/assets/patata.jpg"
        contain
    />

</v-card>
<v-card id="vision">
    
    <v-card-title>
        <h2>VISION</h2>
    </v-card-title>
    
    <v-card-text>
    
    </v-card-text>

</v-card>
<v-card id="mision">
    
    <v-card-title>
        <h2>MISION</h2>
    </v-card-title>
    
    <v-card-text>

    </v-card-text>

</v-card>
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
h2{
    font-size: 48px;
}
.v-card-text{
    font-size: 24px;
}

#conocenos-logo{
    border-radius: 50%;
}

</style>