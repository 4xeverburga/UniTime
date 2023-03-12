<template>
<v-card
	elevation="0"
	class="mx-11"
>
	<v-card-title
		class="my-13"
		width="80%"
	>
		<p 
		class="text-lg-h2 text-md-h4 text-h5 text-center">
			<span class="text-decoration-underline" style="color:#1976D2">Portafolio de Proyectos</span>
			<span class="font-weight-medium">/Nombre del proyecto</span>
		</p>

	</v-card-title>
	<v-card-text
		class="d-flex justify-center mx-13"
	>
		<v-card
			elevation="0"
			width="45%"
		>
			<v-card-title class="mb-10">
				<p class="text-h2 font-weight-medium">Nombre del proyecto</p>
			</v-card-title>

			<v-card-text>
				El Centro Cultural Avanzada Tecnológica (CCAT) es una organización de estudiantes y egresados fundada en la
				Facultad de Ingeniería Industrial y de Sistemas de la Universidad Nacional de Ingeniería, el 22 de mayo de 1991,
				como una iniciativa estudiantil cuya motivación especial es emprender el reto de complementar la formación empresarial,
				académica, cultural y humana de los futuros profesionales para lograr con ellos la construcción de una mejor sociedad.
			</v-card-text>
		</v-card>
		<div class="ma-4">
		<v-img
			class="bg-white"
			width="300"
			:aspect-ratio="1"
			:src="PatataImage"
			cover
		></v-img>
    </div>

	</v-card-text>
</v-card>


</template>

<script setup>
import PatataImage  from "@/assets/patata.jpg"

defineProps(['id'])
</script>

<style scoped>

</style>


<style scoped>
.v-img {
	height: 100px;
}
</style>
