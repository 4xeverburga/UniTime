<template>

	
	<v-card-title class="d-flex align-center">
		<v-icon class="mr-2">mdi-account-group</v-icon>
		<h2 class="group-name">Trabajo de DBD</h2>
	</v-card-title>
	
		<v-card class="mx-4" elevation="0" flat>
			<v-card-title>
				<h5 class="group-role">Rol en el grupo: ADMINISTRADOR</h5>
			</v-card-title>
		</v-card>
		
		
		<v-card-title>
			<h4 class="group-description"><b>Descripción del grupo:</b></h4>
		</v-card-title>
		
	<v-container fluid>
		<v-row justify="start">
			<v-col cols="12" sm="6">
				<v-card class="group-description-box">
					<p class="group-description">
						Grupo formado por estudiantes que están llevando el curso de Diseño de Base de Datos, para la elaboración de un prototipo en base a la gestión de horarios.
					</p>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
	<v-container class = "top_table">
	<v-data-table
	:headers="headers_top"
	:items="proyectos"
	:sort-by="[{ key: 'fecha', order: 'asc' }]"
	class="elevation-1"
	>

	  <template v-slot:top>
		<v-toolbar
		flat
		>
		  <v-toolbar-title>Proyectos pendientes</v-toolbar-title>
		  <v-divider
			class="mx-4"
			inset
			vertical
			></v-divider>
			<v-spacer></v-spacer>
			<v-dialog
			v-model="dialogTop"
			max-width="500px"
			>
			<template v-slot:activator="{ props }">
				<v-btn
				color="primary"
				dark
				class="mb-2"
				v-bind="props"
				>
				New Item
			</v-btn>
		</template>
			<v-card>
				<v-card-title>
					<span class="text-h5">{{ formTitleTop }}</span>
				</v-card-title>
  
				<v-card-text>
					<v-container>
						<v-row>
							<v-col
							cols="12"
							sm="6"
							md="4"
							>
							<v-text-field
						v-model="editedItemTop.nombre"
						label="Nombre de proyecto"
					  ></v-text-field>
					</v-col>
					<v-col
					  cols="12"
					  sm="6"
					  md="4"
					  >
					  <v-text-field
					  v-model="editedItemTop.fecha"
					  type="date"
					  label="Fecha del proyecto"
					  ></v-text-field>
					</v-col>
					<v-col
					  cols="12"
					  sm="6"
					  md="4"
					  >
					  <!-- time field -->
					  <v-text-field
					  v-model="editedItemTop.hora"
					  type="time"
					  label="Hora del proyecto"
					  ></v-text-field>
					</v-col>
				</v-row>
			</v-container>
			  </v-card-text>
  
			  <v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
				  color="blue-darken-1"
				  variant="text"
				  @click="closeTop"
				  >
				  Cancel
				</v-btn>
				<v-btn
				color="blue-darken-1"
				  variant="text"
				  @click="saveTop"
				  >
				  Save
				</v-btn>
			</v-card-actions>
		</v-card>
		  </v-dialog>
		  <v-dialog v-model="dialogDeleteTop" max-width="500px">
			<v-card>
				<v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
			  <v-card-actions>
				  <v-spacer></v-spacer>
				  <v-btn color="blue-darken-1" variant="text" @click="closeDeleteTop">Cancel</v-btn>
				  <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirmTop">OK</v-btn>
				<v-spacer></v-spacer>
			  </v-card-actions>
			</v-card>
		</v-dialog>
		</v-toolbar>
	  </template>
	  
	<template v-slot:item.actions="{ item }">
		<v-icon
		size="small"
		class="me-2"
		  @click="editItemTop(item.raw)"
		  >
		  mdi-pencil
		</v-icon>
		<v-icon
		size="small"
		@click="deleteItemTop(item.raw)"
		>
		mdi-delete
		</v-icon>
		
		<!-- select icon -->
		<v-icon
		size="small"
		@click="deleteItemTop(item.raw)"
		>
		mdi-checkbox-marked-circle
		</v-icon>
	</template>
	<template v-slot:no-data>
		<v-btn
		color="primary"
		@click="initialize"
		>
		Reset
	</v-btn>
	</template>
</v-data-table>
</v-container>

<v-container class="bottom_table">
	<v-data-table
	:headers="headers_top"
	:items="proyectos"
	:sort-by="[{ key: 'fecha', order: 'asc' }]"
	class="elevation-1"
	>
	  <template v-slot:top>
		<v-toolbar
		flat
		>
		  <v-toolbar-title>Tareas de proyecto</v-toolbar-title>
		  <v-divider
			class="mx-4"
			inset
			vertical
			></v-divider>
			<v-spacer></v-spacer>
			<v-dialog
			v-model="dialogTop"
			max-width="500px"
			>
			<template v-slot:activator="{ props }">
				<v-btn
				color="primary"
				dark
				class="mb-2"
				v-bind="props"
				>
				New Item
			</v-btn>
		</template>
			<v-card>
				<v-card-title>
					<span class="text-h5">{{ formTitleTop }}</span>
				</v-card-title>
  
				<v-card-text>
					<v-container>
						<v-row>
							<v-col
							cols="12"
							sm="6"
							md="4"
							>
							<v-text-field
						v-model="editedItemTop.nombre"
						label="Nombre de proyecto"
					  ></v-text-field>
					</v-col>
					<v-col
					  cols="12"
					  sm="6"
					  md="4"
					  >
					  <v-text-field
					  v-model="editedItemTop.fecha"
					  type="date"
					  label="Fecha del proyecto"
					  ></v-text-field>
					</v-col>
					<v-col
					  cols="12"
					  sm="6"
					  md="4"
					  >
					  <!-- time field -->
					  <v-text-field
					  v-model="editedItemTop.hora"
					  type="time"
					  label="Hora del proyecto"
					  ></v-text-field>
					</v-col>
				</v-row>
			</v-container>
			  </v-card-text>
  
			  <v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
				  color="blue-darken-1"
				  variant="text"
				  @click="closeTop"
				  >
				  Cancel
				</v-btn>
				<v-btn
				color="blue-darken-1"
				  variant="text"
				  @click="saveTop"
				  >
				  Save
				</v-btn>
			</v-card-actions>
		</v-card>
		  </v-dialog>
		  <v-dialog v-model="dialogDeleteTop" max-width="500px">
			<v-card>
				<v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
			  <v-card-actions>
				  <v-spacer></v-spacer>
				  <v-btn color="blue-darken-1" variant="text" @click="closeDeleteTop">Cancel</v-btn>
				  <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirmTop">OK</v-btn>
				<v-spacer></v-spacer>
			  </v-card-actions>
			</v-card>
		</v-dialog>
		</v-toolbar>
	  </template>
	  
	<template v-slot:item.actions="{ item }">
		<v-icon
		size="small"
		class="me-2"
		  @click="editItemTop(item.raw)"
		  >
		  mdi-pencil
		</v-icon>
		<v-icon
		size="small"
		@click="deleteItemTop(item.raw)"
		>
		mdi-delete
		</v-icon>
		
		<!-- select icon -->
		<v-icon
		size="small"
		@click="deleteItemTop(item.raw)"
		>
		mdi-checkbox-marked-circle
		</v-icon>
	</template>
	<template v-slot:no-data>
		<v-btn
		color="primary"
		@click="initialize"
		>
		Reset
	</v-btn>
	</template>
</v-data-table>
</v-container>

</template>

<script>
	export default {
		data: () => ({

			dialogTop: false,
			dialogDeleteTop: false,

			dialogBottom: false,
			dialogDeleteBottom: false,


		headers_top: [
				{
		title: 'Fecha',
		key: 'fecha',
		},
		{
		title: 'Hora',
		key: 'hora',
		},
		{
		title: 'Nombre',
		sortable: false,
		key: 'nombre',
		},
		{ title: 'Actions', key: 'actions', sortable: false },
		],

		headers_bottom: [
			{
				title:'Nombre',
				key:'nombre',
				sortable: false,
			},
			{
				title:'Fecha',
				key:'fecha',
			},
			{
				title:'Hora',
				key:'hora',
			},
			{
				title:'Estado',
				key:'estado',
			},
			{
				title:'Responsable',
				key:'responsable',
			},
			{
				title:'Acciones',
				key:'acciones',
				sortable: false,
			}	
		],

		proyectos: [],
		proctos_all_fields: [],
		tareas:[],
		tareas_all_fields:[],

		editedIndex: -1,	
		editedItemTop: {
			fecha:'',
			hora:'',
			nombre:''
		},
		defaultItemTop: {
			fecha:'',
			hora:'',
			nombre:''
		},

	  }),
  

	  computed: {
		formTitleTop () {
		  return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
		},
	  },
  
	  watch: {	
		dialogTop (val) {
		  val || this.closeTop()
		},
		dialogDeleteTop (val) {
		  val || this.closeDeleteTop()
		},
	  },
  
	  created () {
		this.initialize()
	  },
  
	  methods: {

		initialize () {
		this.proyectos = [
			{
			fecha: '10/10/2021',
			hora: '10:00',
			nombre: 'Proyecto 1'
			},
			{
				fecha: '10/10/2021',
				hora: '10:00',
				nombre: 'Proyecto 2'
			},
			{
				fecha: '10/10/2021',
				hora: '10:00',
				nombre: 'Proyecto 3'
			}
		]
		},
  
		editItemTop (item) {
			console.log("editItemTop");
		  this.editedIndex = this.proyectos.indexOf(item)
		  this.editedItemTop = Object.assign({}, item)
		  this.dialogTop = true
		},
  
		deleteItemTop (item) {
		  this.editedIndex = this.proyectos.indexOf(item)
		  this.editedItemTop = Object.assign({}, item)
		  this.dialogDeleteTop = true
		},
  
		deleteItemConfirmTop () {
		  this.proyectos.splice(this.editedIndex, 1)
		  this.closeDeleteTop()
		},
  
		closeTop () {
		  this.dialogTop = false
		  this.$nextTick(() => {
			this.editedItemTop = Object.assign({}, this.defaultItemTop)
			this.editedIndex = -1
		  })
		},
  
		closeDeleteTop () {
		  this.dialogDeleteTop = false
		  this.$nextTick(() => {
			this.editedItemTop = Object.assign({}, this.defaultItemTop)
			this.editedIndex = -1
		  })
		},
  
		saveTop () {
		  if (this.editedIndex > -1) {
			Object.assign(this.proyectos[this.editedIndex], this.editedItemTop)
		  } else {
			this.proyectos.push(this.editedItemTop)
		  }
		  this.closeTop()
		},
	  },
	}
  </script>