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
		  <v-toolbar-title>Etapas de proyecto</v-toolbar-title>
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
		@click="selectItemBottom(item.raw)"
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
		  <v-toolbar-title>Tareas de etapa (A)</v-toolbar-title>
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
		@click="selectItemBottom(item.raw)"
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
		title: 'Fecha Inicio',
		key: 'fecha_inicio',
		},
		{
		title: 'Fecha fin',
		key: 'fecha_fin',
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
				title:'Nombre',
				key:'nombre',
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
		],
		
		etapa_Seleccionada: '',
		etapas: [],
		etapas_all_fields: [],
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
			nombre:'',
			responsable:'',
			estado:'',
		},
		defaultItemBottom: {
			fecha:'',
			hora:'',
			nombre:'',
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
		],
		this.tareas = [
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
		selectItemBottom(item) {
		  this.editedIndex = this.etapas.indexOf(item)
		  console.log("selectItemBottom: index= " + this.editedIndex);
		  console.log("etapas hay o que?",this.etapas[this.editedIndex]);
		  this.getTareas();
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
		getIndexSelected(){
			const selectedIndex = this.proyectos.findIndex(
			//compare strings
			(item) => item === this.proyecto_seleccionado
			);
			console.log('Selected Index:', selectedIndex);
			return selectedIndex;
		},
		getIndexSelectedStage(){
			const selectedIndex = this.editedIndex;
			console.log('etapas:', this.etapas);
			console.log('Selected Index stage:', selectedIndex);
			return selectedIndex ;
		},

		
		// get requests
		getProyectos(){
			
			axios.get(this.pathToServer + '/tareasApi/proyectos/US123456')
			.then(response => {
				// this.proyectos_all = response.data
				console.log(response.data)
				// assign result to proyectos_all
				this.proyectos_all = response.data
				console.log("proyectos all init: ", this.proyectos_all[0])
				// assing only nombre field to proyectos
				this.proyectos = this.proyectos_all.map((item) => item.nombre)
			})
			.catch(error => {
				console.log(error)
			})
		},
		
		getEtapas(){
			// current project id
			const selectedIndex = this.getIndexSelected();
			console.log("proyectos_all: ", this.proyectos_all)
			const idProyecto = this.proyectos_all[selectedIndex].id_proyecto;
			console.log("get request sent to ");
			console.log(this.pathToServer + '/etapas/'+idProyecto)
			axios.get(this.pathToServer + '/tareasApi/etapas/'+idProyecto)
			.then(response => {
				// this.proyectos_all = response.data
				console.log('response of getEtapas',response.data)
				// assign result to proyectos_all 
				this.etapas = response.data;
				
			}).catch(error => {
				console.log(error)
			})
		},
		//JONATHANNNNNN
		//todas las tareas de la etapa 
		getTareas(){
			const selectedIndex = this.editedIndex;
			const idEtapa = this.etapas[selectedIndex].id_etapa;
			console.log("get request sent to xd ", this.pathToServer + '/tareas/' + idEtapa);
			axios.get(this.pathToServer + '/tareasApi/tareas/' + idEtapa)
			.then(response => {
				// this.proyectos_all = response.data
				console.log('response of getTareas',response.data)
				// assign result to proyectos_all
				this.tareas = response.data
			})
			.catch(error => {
				console.log(error)
			})
		},
		

		//JONATHANNNNNN
		// update button
		handleSelection() {
			this.getEtapas();
			this.getTareas();
		},
	},
}
</script>

