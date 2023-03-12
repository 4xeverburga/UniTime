<template>
	{{ $props.id  }}
<v-card
	id="title"
>
	<v-card-title>
		NOMBRE DEL AREA
	</v-card-title>
	<v-card-text>
		Breve descripcion del area
	</v-card-text>
</v-card>

<FuncionComp></FuncionComp>
<ProyectosComp></ProyectosComp>
<MemberProfileComp></MemberProfileComp>
</template>

<script setup>
import FuncionComp from "@/components/Areas/FuncionComp.vue"
import ProyectosComp from "@/components/Areas/ProyectosComp.vue"
import MemberProfileComp from "@/components/Areas/MemberProfileComp.vue"

defineProps(['id'])

</script>

<style scoped>


</style>
