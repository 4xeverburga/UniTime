<!-- This component has the description of a unique project given its id. -->
<template>

<!-- <p>
	param id
	{{ $route.params.id  }}
</p> -->

<section ref="project_description" >
	<ProjectDescription></ProjectDescription>
</section>


<v-divider
	vertical
	color="black"
></v-divider>


<section ref = "project_team">
	<ProjectTeam></ProjectTeam>
</section>

<section ref = "test_section">

</section>

</template>

<script setup>
import ProjectDescription from '@/components/ProjectDetail/ProjectDescription.vue';
import ProjectTeam from '@/components/ProjectDetail/ProjectTeam.vue';
import { onMounted, onBeforeMount, ref } from 'vue';


const project_description = ref(null);
const test_section = ref(null);
const project_team = ref(null);


// mounted 
onMounted(() => {
	console.log("mounted");
	window.addEventListener('scroll', handleScroll);
});
onBeforeMount(() => {
	console.log("before mount");
	window.removeEventListener('scroll', handleScroll);
});


const handleScroll = () => {
	// position from project_description section
	const scroll_position = window.scrollY;
	const project_description_top = project_description.value.offsetTop;
	const project_description_height = project_description.value.offsetHeight;
	// if scroll is inside 2/3 of project_description section then scroll jump to project_team section
	// // log all the values
	// console.log("scroll position", scroll_position);

	if (scroll_position > 400){
		console.log("scroll inside project_description section");
		const nextSectionTop = test_section.value.offsetTop;
        window.scrollTo({
          top: nextSectionTop,
          behavior: 'smooth'
        });
	}
}



</script>

<style scoped>

</style>
