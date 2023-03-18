<template>
		<v-row
			no-gutters
			no-line
			>
			<v-col
				no-gutters
				cols="6"
			>
				<v-card
				elevation="0"
					>
				<v-card-title>  Funcion del area </v-card-title>
				<v-card-text>
					flor de la Funcion del area
				</v-card-text>
				</v-card>
			</v-col>
			<v-col
				no-gutters
				cols="6"
			>
				<v-card
				elevation="0"
				class="pa-4 text-center secondary text-no-wrap rounded-lg"
				color="#778da94d"
				>

					<v-row
						>
						<v-col
							no-gutters
							cols="6"
							v-for="(link, id) in links"
							:key="id"
						>
						{{ link.rol }}
						<v-img
							:src="link.img"
							:lazy-src="link.img"
							>
						</v-img>
						<v-btn
							title
							link
							rounded
							flat
							:href="link.url"
							>
							<v-icon dark>mdi-linkedin</v-icon>
							visitar LinkedIn
						</v-btn>
						</v-col>
					</v-row>
				</v-card>

			</v-col>
		</v-row>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins');
@import url('https://fonts.googleapis.com/css?family=Inter');

.v-col {


	font-family: 'Poppins';
	font-weight: 700;
	font-size: 48px;
	line-height: 1.5;
	text-align: left;
}

.v-btn {
	display: flex;
	justify-content: flex-end;
	text-align: center;
	font-size: 24px;
	font-family: 'Poppins';
}
</style>

<script setup>
import { ref } from 'vue'

const links = ref([
{ id: 1, rol: 'Director', url: "https://www.youtube.com/@CCATFIIS", img:"https://www.allthingsdogs.com/wp-content/uploads/2020/01/Chow-Chow-Feature-678x381.jpg"},
{ id: 2, rol: 'Subdirector', url: "https://www.youtube.com/@CCATFIIS", img:"https://www.allthingsdogs.com/wp-content/uploads/2020/01/Chow-Chow-Feature-678x381.jpg"},
])
</script>
