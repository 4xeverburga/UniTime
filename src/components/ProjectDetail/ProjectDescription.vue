<template>
	<v-card
		class="text-start"
		width="60%"
		elevation="0"
	>
		<v-card-title
			class="mb-10"
		>
			<img id="icon"/>
			<h2>Nombre del proyecto</h2>
		</v-card-title>



		<v-card-text
			class="ml-7"
		>
		El Centro Cultural Avanzada Tecnológica (CCAT) es una organización de estudiantes y egresados fundada en la
		Facultad de Ingeniería Industrial y de Sistemas de la Universidad Nacional de Ingeniería, el 22 de mayo de 1991,
		como una iniciativa estudiantil cuya motivación especial es emprender el reto de complementar la formación empresarial,
		académica, cultural y humana de los futuros profesionales para lograr con ellos la construcción de una mejor sociedad.
		</v-card-text>
	</v-card>

	<v-img
		id="conocenos-logo"
		lazy-src="../src/assets/patata.jpg"
		height="240"
		width="240"
		src="../src/assets/patata.jpg"
		contain
	/>


</template>

<script setup>
defineProps(['id'])
</script>
