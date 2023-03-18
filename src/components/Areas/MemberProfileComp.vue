<template>
	<section class="ml-4 mr-4">
		<v-card-title>
			Perfil para nuevos miembros
		</v-card-title>
		<br>
		<v-card-text>
			Estas son algunas de las características que buscamos de nuestros nuevos miembros para que su estadía en el área sea la más óptima
		</v-card-text>
		<v-row class="mx-0 text-center">
			<!-- TODO: recibir un arreglo de características
						dividir en 2 y generar una fila por
						cada característica.
			-->
			<v-col cols="4"> grupo 1</v-col>
			<v-col cols="4"> imagen </v-col>
			<v-col cols="4"> grupo 2</v-col>

		</v-row>
	</section>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Poppins');
@import url('https://fonts.googleapis.com/css?family=Inter');

.v-card-title{
	font-size: 48px;
	font-weight: 600;
}

.v-card-text{

	font-family: 'Poppins';
	font-style: normal;
	font-weight: 300;
	font-size: 24px;
	line-height: 36px;
	text-align: center;
}
</style>
