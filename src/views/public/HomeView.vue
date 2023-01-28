<template>

<v-card id="conocenos">

    <v-card-title>
        <img id="icon"/>
        <h2>CONOCENOS</h2>
    </v-card-title>

    <v-card-text>
            El Centro Cultural Avanzada Tecnológica (CCAT) es una organización de estudiantes y egresados fundada en la
            Facultad de Ingeniería Industrial y de Sistemas de la Universidad Nacional de Ingeniería, el 22 de mayo de 1991,
            como una iniciativa estudiantil cuya motivación especial es emprender el reto de complementar la formación empresarial,
            académica, cultural y humana de los futuros profesionales para lograr con ellos la construcción de una mejor sociedad.
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

<v-row>
    <v-col>
    <v-card id="vision">

        <v-card-title>
            <h2>VISION</h2>
        </v-card-title>

        <v-card-text>
            Ser reconocido a nivel nacional como el principal centro universitario en formación empresarial, profesional
            y de investigación.
        </v-card-text>

    </v-card>
</v-col>

<v-col>
<v-card id="mision">

    <v-card-title>
        <h2>MISION</h2>
    </v-card-title>

    <v-card-text>
            Contribuir con la formación humana de profesionales y líderes empresariales con vocación de servicio y actitud
            de trabajo en equipo; profesionales competentes y capacitados que puedan emprender y enfrentar los retos que
            nuestra sociedad requiere para su desarrollo.
    </v-card-text>

</v-card>
</v-col>
</v-row>

<!-- areas y aliados -->


<AreasComp></AreasComp>
<AliadosComp></AliadosComp>

<!-- FIN -->

</template>

<script setup>
import AreasComp from '@/components/Home/AreasComp.vue';
import AliadosComp from '@/components/Home/AliadosComp.vue';
</script>

<style>
template{
    font-family: 'Inter';
}
h2{
    font-size: 48px;
}
.v-card-title {
    font-family: 'Poppins';
}
.v-card-text{
    font-size: 24px;
}

#conocenos-logo{
    border-radius: 50%;
}

</style>
