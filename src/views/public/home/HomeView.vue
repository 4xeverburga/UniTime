<template>

<v-card id="conocenos"
	class="d-flex  ma-16"
	elevation="0"
>
	<v-card
		class="text-start"
		elevation="0"
		flat
	>
		<v-card-title
			class="mb-10"
		>
			<img id="icon"/>
			<h2>¿Qué es UniTime?</h2>
		</v-card-title>

		<v-card-text
			class="ml-7"
		>
		Nuestra startup se enfoca en mejorar la gestión de grupos de estudiantes a través de un aplicativo web. Ofrecemos herramientas 
		para la gestión de horarios, evaluación de desempeño, generación de reuniones virtuales y/o presenciales, gestión de proyectos, 
		foros y comunicación interna.
		</v-card-text>
	</v-card>



</v-card>

<v-row class="mx-16">
	<v-col>
		<v-card
			id="vision"
			class="mx-13"
			elevation="0"
		>

			<v-card-title
				class="mb-7"
			>
				<h2>VISION</h2>
			</v-card-title>

			<v-card-text>
				Buscar ampliar nuestro público objetivo no solo a estudiantes universitarios, sino poder ir más allá de eso logrando 
				trabajar con diversas organizaciones en el futuro, y poder mantener una excelente experiencia respecto a la gestión de 
				horarios de forma colaborativa.
			</v-card-text>

		</v-card>
	</v-col>

	<v-divider
		vertical
		color="black"
	></v-divider>

	<v-col>
		<v-card
			id="mision"
			class="mx-13"
			elevation="0"
			flat
		>

			<v-card-title
				class="mb-7"
			>
				<h2>MISION</h2>
			</v-card-title>

			<v-card-text>
				Proveer a los estudiantes universitarios de herramientas de creación de horarios grupales, gestión de proyectos y de 
				comunicación entre miembros para ayudar en sus proyectos y mejorar su  rendimiento académico. 
			</v-card-text>

		</v-card>
	</v-col>
</v-row>
<!-- FIN -->

</template>

<script setup>


</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Poppins');
@import url('https://fonts.googleapis.com/css?family=Inter');

template{
	font-family: 'Inter';
}
h2{
	font-size: 48px;
}

.v-card-title {
	font-family: 'Poppins', sans-serif;
	font-size: 40px;
	font-weight: 600;
}
.v-card-text{
	font-size: 24px;
	line-height: normal;
	font-family: 'Inter', sans-serif;
}

#conocenos-logo{
	border-radius: 50%;
}

</style>
