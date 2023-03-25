<!-- currently not in use  -->
<template>
		<!-- A sticky navbar with a logo on the left and links on the right for Inicio, Areas, Proyectos and Eventos -->
		<!-- it has 2 columns, one for the logo and the other for the links, the links are inside a container with rounded corners and a background color -->


	<v-app-bar app color="#778DA9" dark>
		<!-- nav icon should change the state of the drawer -->
		<v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
		<v-toolbar-title>CCAT</v-toolbar-title>
		<v-spacer></v-spacer>

		<v-card v-if="drawer" class="v-card">
			<v-btn text>Inicio</v-btn>
			<!-- <v-btn text>Areas</v-btn> -->
			<v-menu
				open-on-hover
				>
				<template v-slot:activator="{ props }">
					<v-btn
						v-bind="props"
					>
					Areas
					</v-btn>

				</template>

				<v-list>
					<v-list-item
						v-for="(item, index) in items"
						:key="index"
					>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item>
				</v-list>
				</v-menu>
			<v-btn text>Proyectos</v-btn>
			<v-btn text>Eventos</v-btn>
		</v-card>

	</v-app-bar>

</template>

<script setup>
import {computed} from 'vue'
import {ref} from 'vue'
// state of the drawer/buttons
const drawer = ref(false)

const items = ref([
	{id: 1, title: 'IDI'},
	{id: 2, title: 'Academica'},
	{id: 3, title: 'GTH'},
	{id: 4, title: 'Logistica'},
])

function toggleDrawer() {
	drawer.value = !drawer.value
	console.log(drawer.value);
}
</script>

<style scoped>
	.v-card {
		border-radius: 20px;
		background-color: #3f51b5;
		margin: auto 10px;
	}

</style>

