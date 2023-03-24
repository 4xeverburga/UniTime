<template>
	<v-card
		class="mx-16"
		elevation="0"
	>
	<v-card-title
		class="text-left"
	>
		<h2>AREAS</h2>
	</v-card-title>

	<v-row
		no-gutters
		justify="center"
		mb-6
	>
		<v-btn
			v-for="area in areas" :key="area.id"
			class="my-11 mx-16 text-black text-h2"
			height="80px"
			title
			flat
			plain
			link
			rounded
			:href="area/area.id"
		>
			<v-icon color="gray">
				mdi-numeric-{{ area.id }}-circle
			</v-icon>

			<span size="300px">
				{{ area.name }}
			</span>
		</v-btn>

	</v-row>
</v-card>
</template>

<script setup>
import { ref } from 'vue'
const areas = ref([
		{id: 1, name: 'Academica'},
		{id: 2, name: 'IDI'},
		{id: 3, name: 'Logistica'},
		{id: 4, name: 'Tec. Informacion'},
		{id: 5, name: 'GTH'},
	])
</script>
