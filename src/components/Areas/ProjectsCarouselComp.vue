<template>
    <!-- a carousel with cycle and pagination  -->
	<section>
		<v-card-title>
			Proyectos
		</v-card-title>
		<div class="ma-5">
			
			<v-carousel 
			cycle
			show-arrows="hover"	
			>
			<v-carousel-item
			v-for="(item, id) in project_items_test"
			:key="id"
			:alt="item.title"
			cover
			>
			<!-- FIX: can't add text when there is an image -->
			<!-- <v-sheet
				height="100%"
						>
						<div class="d-flex fill-height justify-center align-center">
							<div class="text-h2">
								{{ item.title }} Slide
							</div>
						</div>
					</v-sheet> -->
					<a :href="item.link">
						<v-img
						:src="item.image"
						:lazy-src="item.image"
						cover
						></v-img>
					</a>
				</v-carousel-item>
			</v-carousel>
			
		</div>
	</section>

</template>

<script setup>

// id, image, title, description, link
const project_items_test = [
    {
		id: 1,
		image: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
		title: "Proyecto 1",
		description: "Descripcion del proyecto 1",
		link: "/projects/1"

    },
    {
		id: 2,
		image: "https://www.thesprucepets.com/thmb/8hRZG0wVsNgfg8MGJyPn0Z3mQAk=/3865x0/filters:no_upscale():strip_icc()/pomeranian-108995744-581636ae3df78cc2e891d882.jpg",
		title: "Proyecto 2",
		description: "Descripcion del proyecto 2",
		link: "/projects/2"

	},
	{
		id: 3,
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/NYCS-bull-trans-3.svg/1200px-NYCS-bull-trans-3.svg.png",
		title: "Proyecto 3",
		description: "Descripcion del proyecto 3",
		link: "/projects/3"
    }
]
</script>

<style scoped>
/* add margin to the carousel to make it look better */
.v-carousel__controls {
	margin: 10px;
}

@import url('https://fonts.googleapis.com/css?family=Poppins');
@import url('https://fonts.googleapis.com/css?family=Inter');

.v-card-title{
	font-family: 'Poppins';
	font-weight: 600;
	font-size: 48px;
	line-height: 3;
}
</style>
