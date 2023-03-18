<template>

<v-card id="conocenos"
	class="d-flex  ma-16"
	elevation="0"
>
	<v-card
		class="text-start"
		width="60%"
		elevation="0"
	>
		<v-card-title
			class="mb-10"
		>
			<img id="icon"/>
			<h2>CONOCENOS</h2>
		</v-card-title>

		<v-card-text
			class="ml-7"
		>
		El Centro Cultural Avanzada Tecnológica (CCAT) es una organización de estudiantes y egresados fundada en la
		Facultad de Ingeniería Industrial y de Sistemas de la Universidad Nacional de Ingeniería, el 22 de mayo de 1991,
		como una iniciativa estudiantil cuya motivación especial es emprender el reto de complementar la formación empresarial,
		académica, cultural y humana de los futuros profesionales para lograr con ellos la construcción de una mejor sociedad.
		</v-card-text>
	</v-card>

	<v-img
		id="conocenos-logo"
		lazy-src="https://scontent.flim28-1.fna.fbcdn.net/v/t1.6435-9/83150382_2534126020138580_692631879750629304_n.png?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=h3qYMLqnEkMAX_hzRVF&_nc_ht=scontent.flim28-1.fna&oh=00_AfBQIvDvRToZm2v92MVkzt66i77s83DwW4IfhXAbxpgx5Q&oe=643CE7C2"
		height="240"
		width="240"
		src="https://scontent.flim28-1.fna.fbcdn.net/v/t1.6435-9/83150382_2534126020138580_692631879750629304_n.png?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=h3qYMLqnEkMAX_hzRVF&_nc_ht=scontent.flim28-1.fna&oh=00_AfBQIvDvRToZm2v92MVkzt66i77s83DwW4IfhXAbxpgx5Q&oe=643CE7C2"
		contain
	/>

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
				Ser reconocido a nivel nacional como el principal centro universitario en formación empresarial, profesional
				y de investigación.
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
		>

			<v-card-title
				class="mb-7"
			>
				<h2>MISION</h2>
			</v-card-title>

			<v-card-text>
				Contribuir con la formación humana de profesionales y líderes empresariales con vocación de servicio y actitud
				de trabajo en equipo; profesionales competentes y capacitados que puedan emprender y enfrentar los retos que
				nuestra sociedad requiere para su desarrollo.
			</v-card-text>

		</v-card>
	</v-col>
</v-row>

<!-- areas y aliados -->

<br>
<br>


<AreasComp></AreasComp>

<AliadosComp></AliadosComp>
<!-- FIN -->

</template>

<script setup>
import AreasComp from '@/components/Home/AreasComp.vue';
import AliadosComp from '@/components/Home/AliadosComp.vue';
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
