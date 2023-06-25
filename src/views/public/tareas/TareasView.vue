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
	<v-data-table
	  :headers="headers"
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
			v-model="dialog"
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
				<span class="text-h5">{{ formTitle }}</span>
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
						v-model="editedItem.nombre"
						label="Nombre de proyecto"
					  ></v-text-field>
					</v-col>
					<v-col
					  cols="12"
					  sm="6"
					  md="4"
					>
					  <v-text-field
						v-model="editedItem.fecha"
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
						v-model="editedItem.hora"
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
				  @click="close"
				>
				  Cancel
				</v-btn>
				<v-btn
				  color="blue-darken-1"
				  variant="text"
				  @click="save"
				>
				  Save
				</v-btn>
			  </v-card-actions>
			</v-card>
		  </v-dialog>
		  <v-dialog v-model="dialogDelete" max-width="500px">
			<v-card>
			  <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
			  <v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
				<v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
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
		  @click="editItem(item.raw)"
		>
		  mdi-pencil
		</v-icon>
		<v-icon
		  size="small"
		  @click="deleteItem(item.raw)"
		>
		  mdi-delete
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
  </template>

  <script>
	export default {
	  data: () => ({
		dialog: false,
		dialogDelete: false,
		headers: [
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


		proyectos: [],
		editedIndex: -1,
		editedItem: {
			fecha:'',
			hora:'',
			nombre:''
		},
		defaultItem: {
			fecha:'',
			hora:'',
			nombre:''
		},
	  }),
  
	  computed: {
		formTitle () {
		  return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
		},
	  },
  
	  watch: {
		dialog (val) {
		  val || this.close()
		},
		dialogDelete (val) {
		  val || this.closeDelete()
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
  
		editItem (item) {
		  this.editedIndex = this.proyectos.indexOf(item)
		  this.editedItem = Object.assign({}, item)
		  this.dialog = true
		},
  
		deleteItem (item) {
		  this.editedIndex = this.proyectos.indexOf(item)
		  this.editedItem = Object.assign({}, item)
		  this.dialogDelete = true
		},
  
		deleteItemConfirm () {
		  this.proyectos.splice(this.editedIndex, 1)
		  this.closeDelete()
		},
  
		close () {
		  this.dialog = false
		  this.$nextTick(() => {
			this.editedItem = Object.assign({}, this.defaultItem)
			this.editedIndex = -1
		  })
		},
  
		closeDelete () {
		  this.dialogDelete = false
		  this.$nextTick(() => {
			this.editedItem = Object.assign({}, this.defaultItem)
			this.editedIndex = -1
		  })
		},
  
		save () {
		  if (this.editedIndex > -1) {
			Object.assign(this.proyectos[this.editedIndex], this.editedItem)
		  } else {
			this.proyectos.push(this.editedItem)
		  }
		  this.close()
		},
	  },
	}
  </script>