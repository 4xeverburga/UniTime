<template>

<v-card
	id="title"
	flat
	elevation="0"
>
	<v-card-title>
		NOMBRE DEL AREA
	</v-card-title>
	<v-card-text >
		Breve descripcion del area
	</v-card-text>

</v-card>

<FuncionComp></FuncionComp>
<ProjectsCarouselComp></ProjectsCarouselComp>
<MemberProfileComp></MemberProfileComp>

</template>

<script setup>
import FuncionComp from "@/components/Areas/FuncionComp.vue"
import ProyectosComp from "@/components/Areas/ProyectosComp.vue"
import MemberProfileComp from "@/components/Areas/MemberProfileComp.vue"
import ProjectsCarouselComp from "@/components/Areas/ProjectsCarouselComp.vue";

defineProps(['id'])

// id, image, title, description, link
const project_items_test = {}
</script>


<style scoped>


</style>
