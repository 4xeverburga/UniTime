<template>
	<v-card>
		<v-card-title>
			Proyectos
		</v-card-title>
		<v-container fluid>
			<v-row dense>
			</v-row>
		</v-container>
	</v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
const proyectos = ref([
	{id: 1, name: "proyecto 1", descripcion:"patata suprema"},
	{id: 2, name: "proyecto 2", descripcion:"patata suprema 1"},
	{id: 3, name: "proyecto 3", descripcion:"patata suprema 2"},
])
</script>