<template>

	<!-- NAVBAR -->
	<v-app-bar class="navbar flex-grow-0" elevation="0" flat app style="background-color: #6c8dbb" >

		<!-- button hamburguer -->
		<v-app-bar-nav-icon class="hamburger" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
		<v-app-bar-title class="unitime-name">unitime</v-app-bar-title>


		<!-- spacer -->
		<v-spacer></v-spacer>


		<v-card class="areas-buttons"  dark elevation="0">
			<!-- iterate over the list of buttons  -->
			<v-btn v-for="button in buttons"
			:key="button.id" class="nav-button"
			:href="button.path"
			>
				{{ button.title }}
			</v-btn>

			<v-menu
				open-on-hover
				>
		

					<v-btn v-for="(item, index) in items"
						:key="index"
					>
					{{ item.title }}
					</v-btn>
				</v-menu>

		</v-card>

	</v-app-bar>

	<!-- DRAWER-->
	<v-navigation-drawer  v-model="drawer"
	app fixed clipped temporary
	mini-variant
	expand-on-hover
	left>
		<v-list-item>
			<v-list-item-content>
				<v-list-item-title class="text-h6"> KEKEROS</v-list-item-title>
				<v-list-item-subtitle> ... Bienvenido!</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>
		<v-divider></v-divider>

	</v-navigation-drawer>

</template>

<script setup>

import {ref} from 'vue'

// // state of the drawer/buttons
const drawer = ref(false)
const buttons = ref(
	[
		{id:1, title: 'Inicio', icon: 'mdi-home', path: '/' },
		{id:2, title: 'Grupos', icon: 'mdi-cog', path:'/misgrupos' },
		{id:3, title: 'Horarios', icon: 'mdi-cog', path:'/horarios' },
		{id:4, title: 'Tareas', icon: 'mdi-cog', path:'/tareas' },
		{id:5, title: 'Estadísticas', icon: 'mdi-cog', path:'/events' },
	]
)

const items = ref([

])

</script>

<style scoped>
.navbar{
	/* background-color: #D9E8F6; */
	background-color: #778DA9;
}

/* align text of the name to the left  */
.unitime-name{
	text-align: left;
	/* make it bold */
	font-weight: bold;
	/* make it white*/
	color: #D9D9D9;
}

/* add a margin to the buttons container */
.areas-buttons{
	margin-right: 20px;
	background-color: rgba(135, 204, 250, 0.24);
	/* align the text in the middle of the container */
	align-items: center;

}

/* hide the hamburger menu */
.hamburger{
	display: none;
}

/* font size of nav-button is bigger */
.nav-button{
	text-align: center;
	font-size: 1.3rem;
	min-width: 200px;
	max-width: 300px;
	font-family: 'Roboto', sans-serif;
	color: #031535;
	/* text in lowercase */
	text-transform: none;
	/* align text in the center from top to bottom  */
	align-items: center;
	height: 40px;
}

/* the logo has a left margin of 10 px */
.logo{
	margin-left: 40px;
}

.hamburger{
	display: block;
}
.logo{
	margin-left: 0px;
}
</style>
