<template>
    <v-dialog v-model="dialogVisible" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Editar Roles</span>
        </v-card-title>
        <v-data-table
          :items-per-page="itemsPerPage"
          :headers="headers"
          :items="members"
          item-value="name"
          class="elevation-1 members-table"
        >
          <template v-slot:item.rol="{ item }">
            <v-select
              v-model="item.rol"
              :items="rolOptions"
              outlined
              dense
              @change="updateRol(item)"
            ></v-select>
          </template>
        </v-data-table>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="guardarRoles">Guardar</v-btn>
          <v-btn color="error" @click="cerrarDialog">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        itemsPerPage: 5,
        headers: [
          {
            title: 'Miembros del grupo',
            align: 'start',
            sortable: false,
            key: 'name',
          },
          { title: 'Rol en el grupo', align: 'end', key: 'rol' },
        ],
  
        members: [
          {
            name: 'Marcos Hidalgo',
            rol: 'Administrador',
          },
        ],
  
        dialogVisible: false,
        rolOptions: ['Administrador', 'Supervisor', 'Moderador', 'Miembro'],
      };
    },
    methods: {
      cerrarDialog() {
        this.dialogVisible = false;
      },
  
      updateRol(item) {
        // Ciclo circular de opciones de rol
        const currentIndex = this.rolOptions.indexOf(item.rol);
        const nextIndex = (currentIndex + 1) % this.rolOptions.length;
        item.rol = this.rolOptions[nextIndex];
      },
      
      guardarRoles() {
        // Lógica para guardar los roles actualizados
      },
    },
  };
  </script>