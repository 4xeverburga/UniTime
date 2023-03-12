<!-- This component has the description of a unique project given its id. -->
<template>

<p>
	<!-- param id -->
	{{ $route.params.id  }}
</p>


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


</template>

<script setup>
import ProjectDescription from '@/components/ProjectDetail/ProjectDescription.vue';
import ProjectTeam from '@/components/ProjectDetail/ProjectTeam.vue';



</script>

<style scoped>

</style>
