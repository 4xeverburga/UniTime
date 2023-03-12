<template>

	<v-app>

		<DrawerComp/>

		<v-main>
			<router-view></router-view>
		</v-main>

		<footer-comp-vue></footer-comp-vue>

	</v-app>
</template>

<script setup>
import FooterCompVue from './components/Layout/FooterComp.vue';
import DrawerComp from './components/Layout/DrawerComp.vue';
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Poppins');
@import url('https://fonts.googleapis.com/css?family=Inter');




/* change the font of the buttons globally to poppins. Make them bold*/
.nav-button{
	font-family: 'Inter', sans-serif;
	font-weight: bold;
	color: rgb(254, 254, 254);
}

</style>
