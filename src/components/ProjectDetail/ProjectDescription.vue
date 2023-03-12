<template>
	<v-card
		elevation="0"
		class="mx-13"
	>
		<v-card-title
		class="mt-13git "
	>
		<p class="text-h2">
			<span class="text-decoration-underline" style="color:#1976D2">Portafolio de Proyectos</span>
			<span class="font-weight-medium">/Nombre del proyecto</span>
		</p>
	</v-card-title>


	<v-card
		class="text-start"
		elevation="0"
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

	<v-img
		id="conocenos-logo"
		lazy-src="@/assets/patata.jpg"
		height="240"
		width="240"
		:src= "PatataImage"
		contain
	/>
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
