<!-- This component has the description of a unique project given its id. -->
<template>
  
<p>
    <!-- param id -->
    {{ $route.params.id  }}
</p>


<v-col>
    <ProjectDescription></ProjectDescription>
</v-col>

<v-divider
    vertical
    color="black"
></v-divider>

<v-col>
    <ProjectTeam></ProjectTeam>
</v-col>


</template>

<script setup>
import ProjectDescription from '@/components/ProjectDetail/ProjectDescription.vue';
import ProjectTeam from '@/components/ProjectDetail/ProjectTeam.vue';



</script>

<style scoped>

</style>
