<template>
<v-card elevation="0" class="mx-16">
	<v-card-title>
		<h2>Aliados</h2>
	</v-card-title>
	<v-row
	class="mx-16">
		<v-col cols="4" v-for="(aliado, id) in visible" :key="id">
			<v-card>
				<v-img
					:src="aliado.img"
					height="200px"
				></v-img>
				<v-card-title>
					<h3 class="text-center">{{ aliado.name }}</h3>
				</v-card-title>
			</v-card>
		</v-col>
	</v-row>

	<v-row class="my-5">
		<v-col class="text-center" cols="12">
			<!-- a pagination linked to "page" -->
			<v-pagination v-model="page.val" :length="pages" circle></v-pagination>
		</v-col>
	</v-row>

</v-card>
</template>

<script setup>
import { reactive, computed } from 'vue'

const itemsPerPage = 3
const page = reactive({val: 1})

const items = [
	{id: 1, name: 'Datux Perú', img: "https://datuxonline.com/uploads/system/logo-dark.png"},
	{id: 2, name: 'NEXTECH Education Center', img :"https://scontent.flim28-2.fna.fbcdn.net/v/t39.30808-6/326366343_839680313760280_7007851244189608947_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4pzTfriLdE8AX-nTuVh&_nc_ht=scontent.flim28-2.fna&oh=00_AfC4XyHlgqZmC5MgukbRunoiLL4ofFW1XrbTtUgk_PlJhA&oe=641A3EEF"},
	{id: 3, name: 'ACTI', img: "https://scontent.flim28-1.fna.fbcdn.net/v/t39.30808-1/299229692_1251851412236975_2507372456969987732_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=c6021c&_nc_ohc=WkSw06v2xjwAX-pfuxL&_nc_ht=scontent.flim28-1.fna&oh=00_AfBqrVs3OXgu2000RY-Lgjk5UnIA48Ego4HXnHy_mwmJlQ&oe=641A2A81"},
	{id: 4, name: 'LEINN', img: "https://scontent.flim28-2.fna.fbcdn.net/v/t39.30808-6/313416773_535376425266343_8340917910543083885_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MS1k10CNfQcAX8Naz2k&_nc_ht=scontent.flim28-2.fna&oh=00_AfAKgK95tDjaGjBDEahTsimcX0dhxBhq47-Tndp2PfOHzA&oe=641B345A"},
	{id: 5, name: 'Data Analytics Center', img: "https://scontent.flim28-1.fna.fbcdn.net/v/t39.30808-6/320682057_874141057074492_2718143439124867723_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Yzoj9-PCX3YAX8pxcrG&_nc_ht=scontent.flim28-1.fna&oh=00_AfBtPqzCJzsofT214bB0CxykOznlN8wj3hcBzhVvrGNZ-A&oe=641ABD54"},
	{id: 6, name: 'WE Educación Ejecutiva', img: "https://scontent.flim28-2.fna.fbcdn.net/v/t39.30808-6/313400529_414749957537264_2254285819724837020_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7X5ge8iTGrQAX-wZtIY&_nc_ht=scontent.flim28-2.fna&oh=00_AfDJpxbz6X-sHFYTK-KJosBESurThfruFCMotNUFpyXlDQ&oe=641B48BF"},
	{id: 7, name: 'Educate Perú Consultores', img: "https://educateperuconsultores.com/uploads/system/logo-dark.png"},
	]

const pages = computed(() => {
	return Math.ceil(items.length / itemsPerPage)
})

const visible = computed(() => {
	console.log('visible')

	return items.slice((page.val - 1) * itemsPerPage, page.val * itemsPerPage)
})

</script>
