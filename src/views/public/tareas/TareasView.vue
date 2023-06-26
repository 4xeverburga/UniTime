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

	<!-- make a selector for proyectos -->
	<v-container>
		<v-row>
			<v-col cols="12" sm="6">
				<v-select
				v-model="proyecto_seleccionado"
				:items="proyectos"
				item-text="name"
				item-value="id"
				label="Proyectos"
				></v-select>
			</v-col>
		</v-row>
		<v-btn
		color="primary"
		@click="handleSelection"
		>Actualizar proyecto</v-btn>
	</v-container>

	<!-- button to update proyecto -->

	<v-container class = "top_table">
	<v-data-table
	:headers="headers_top"
	:items="etapas"
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
						label="Nombre de etapa"
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
					  label="Fecha del etapa"
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
					  label="Hora del etapa"
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
	:headers="headers_bottom"
	:items="tareas"
	:sort-by="[{ key: 'fecha', order: 'asc' }]"
	class="elevation-1"
	>
	  <template v-slot:top>
		<v-toolbar
		flat
		>
		  <v-toolbar-title>Tareas de etapa</v-toolbar-title>
		  <v-divider
			class="mx-4"
			inset
			vertical
			></v-divider>
			<v-spacer></v-spacer>
			<v-dialog
			v-model="dialogBottom"
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
					<span class="text-h5">{{ formTitleBottom }}</span>
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
						v-model="editedItemBottom.nombre"
						label="Nombre de tarea"
					  ></v-text-field>
					</v-col>
					<v-col
					  cols="12"
					  sm="6"
					  md="4"
					  >
					  <v-text-field
					  v-model="editedItemBottom.fecha"
					  type="date"
					  label="Fecha del tarea"
					  ></v-text-field>
					</v-col>
					<v-col
					  cols="12"
					  sm="6"
					  md="4"
					  >
					  <!-- time field -->
					  <v-text-field
					  v-model="editedItemBottom.hora"
					  type="time"
					  label="Hora de tarea"
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
				  @click="closeBottom"
				  >
				  Cancel
				</v-btn>
				<v-btn
				color="blue-darken-1"
				  variant="text"
				  @click="saveBottom"
				  >
				  Save
				</v-btn>
			</v-card-actions>
		</v-card>
		  </v-dialog>
		  <v-dialog v-model="dialogDeleteBottom" max-width="500px">
			<v-card>
				<v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
			  <v-card-actions>
				  <v-spacer></v-spacer>
				  <v-btn color="blue-darken-1" variant="text" @click="closeDeleteBottom">Cancel</v-btn>
				  <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirmBottom">OK</v-btn>
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
		  @click="editItemBottom(item.raw)"
		  >
		  mdi-pencil
		</v-icon>
		<v-icon
		size="small"
		@click="deleteItemBottom(item.raw)"
		>
		mdi-delete
		</v-icon>
		
		<!-- select icon -->
		<v-icon
		size="small"
		@click="deleteItemBottom(item.raw)"
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
//axios
import axios from 'axios'

	export default {
		data: () => ({
			
			pathToServer: 'http://localhost:8080',

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
				sortable: false
			},
			{
				title:'Actions',
				key:'actions',
				sortable: false,
			}	
		],
		
		proyecto_seleccionado: '',
		proyectos: [
			'proyecto1',
			'proyecto2',
			'proyecto3',
		],
		proyectos_all: [
			{
				id: 1,
				nombre: 'Proyecto 1',
				fecha: '10/10/2021',
			},
			{
				id: 2,
				nombre: 'Proyecto 2',
				fecha:	'10/10/2021',
			},
			{
				id: 3,
				nombre: 'Proyecto 3',
				fecha: '10/10/2021',
			},
		],
		etapas: [],
		proctos_all_fields: [],
		tareas:[],
		tareas_all_fields:[],

		editedIndex: -1,
		editedIndexBottom: -1,	
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

		editedItemBottom: {
			fecha:'',
			hora:'',
			responsable:'',
			estado:'',
		},
		defaultItemBottom: {
			fecha:'',
			hora:'',
			responsable:'',
			estado:'',
		},

	  }),
  

	  computed: {
		formTitleTop () {
		  return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
		},
		formTitleBottom(){
			return this.editedIndexBottom === -1 ? 'New Item' : 'Edit Item'
		}
	  },
  
	  watch: {	
		dialogTop (val) {
		  val || this.closeTop()
		},
		dialogDeleteTop (val) {
		  val || this.closeDeleteTop()
		},

		dialogBottom (val) {
		  val || this.closeBottom()
		},
		dialogDeleteBottom (val) {
		  val || this.closeDeleteBottom()
		},
	  },
  
	  created () {
		this.initialize();
		this.getProyectos();
	  },
  
	  methods: {

		initialize () {
		this.etapas = [
			{
			fecha: '10/10/2021',
			hora: '10:00',
			nombre: 'etapa1'
			},
			{
				fecha: '10/10/2021',
				hora: '10:00',
				nombre: 'etapa2'
			},
			{
				fecha: '10/10/2021',
				hora: '10:00',
				nombre: 'etapa3'
			}
		],
		this.tareas = [
			{
				fecha:'10-10-20',
				hora:'10:00',
				responsable:'Juan',
				estado:'Pendiente',
			},
			{
				fecha:'10-10-20',
				hora:'10:00',
				responsable:'Juan',
				estado:'Pendiente',
			},
			{
				fecha:'10-10-20',
				hora:'10:00',
				responsable:'Juan',
				estado:'Pendiente',
			},
			{
				fecha:'10-10-20',
				hora:'10:00',
				responsable:'Juan',
				estado:'Pendiente',
			},
			{
				fecha:'10-10-20',
				hora:'10:00',
				responsable:'Juan',
				estado:'Pendiente',
			},
			{
				fecha:'10-10-20',
				hora:'10:00',
				responsable:'Juan',
				estado:'Pendiente',
			},
			{
				fecha:'10-10-20',
				hora:'10:00',
				responsable:'Juan',
				estado:'Pendiente',
			},
			{
				fecha:'10-10-20',
				hora:'10:00',
				responsable:'Juan',
				estado:'Pendiente',
			},
		]
		},
  
		editItemTop (item) {
			console.log("editItemTop");
		  this.editedIndex = this.etapas.indexOf(item)
		  this.editedItemTop = Object.assign({}, item)
		  this.dialogTop = true
		},
		editItemBottom (item){
			this.editedIndexBottom = this.tareas.indexOf(itme)
			this.editItemBottom = Object.assign({},item)
			this.dialogBottom = true
		},
  
		deleteItemTop (item) {
		  this.editedIndex = this.etapas.indexOf(item)
		  this.editedItemTop = Object.assign({}, item)
		  this.dialogDeleteTop = true
		},
		deleteItemBottom(item){
		  this.editedIndexBottom = this.tareas.indexOf(item)
		  this.editedItemBottom = Object.assign({}, item)
		  this.dialogDeleteBottom = true  
		},

		deleteItemConfirmTop () {
		  this.etapas.splice(this.editedIndex, 1)
		  this.closeDeleteTop()
		},
		deleteItemConfirmBottom () {
		  this.tareas.splice(this.editedIndexBottom, 1)
		  this.closeDeleteBottom()
		},

		closeTop () {
		  this.dialogTop = false
		  this.$nextTick(() => {
			this.editedItemTop = Object.assign({}, this.defaultItemTop)
			this.editedIndex = -1
		  })
		},
		closeBottom () {
		  this.dialogBottom = false
		  this.$nextTick(() => {
			this.editedItemBottom = Object.assign({}, this.defaultItemBottom)
			this.editedIndexBottom = -1
		  })
		},

		closeDeleteTop () {
		  this.dialogDeleteTop = false
		  this.$nextTick(() => {
			this.editedItemTop = Object.assign({}, this.defaultItemTop)
			this.editedIndex = -1
		  })
		},
		closeDeleteBottom () {
		  this.dialogDeleteBottom = false
		  this.$nextTick(() => {
			this.editedItemBottom = Object.assign({}, this.defaultItemBottom)
			this.editedIndexBottom = -1
		  })
		},

		saveTop () {
		  if (this.editedIndex > -1) {
			Object.assign(this.etapas[this.editedIndex], this.editedItemTop)
		  } else {
			this.etapas.push(this.editedItemTop)
		  }
		  this.closeTop()
		},
		saveBottom () {
		  if (this.editedIndexBottom > -1) {
			Object.assign(this.tareas[this.editedIndexBottom], this.editedItemBottom)
		  } else {
			this.tareas.push(this.editedItemBottom)
		  }
		  this.closeTop()
		},


		// selector code 
		
		handleSelection() {
		const selectedIndex = this.proyectos.findIndex(
			//compare strings
			(item) => item === this.proyecto_seleccionado
		);
		console.log('Selected Index:', selectedIndex);
		
		},

		// get requests
		getProyectos(){
			axios.get(this.pathToServer + '/tareasApi/proyectos/US123456')
			.then(response => {
				// this.proyectos_all = response.data
				console.log(response.data)
			})
			.catch(error => {
				console.log(error)
			})
		},
	
	
	
	},
}
  </script>

