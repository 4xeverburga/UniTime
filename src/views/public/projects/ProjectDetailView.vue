<!-- This component has the description of a unique project given its id. -->
<template>

<p>
	<!-- param id -->
	{{ $route.params.id  }}
</p>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

</script>

<style scoped>
</style>

<script setup>
</script>
