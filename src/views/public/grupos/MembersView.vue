<template>
  <v-card class="ma-16" elevation="0">
    <v-card-title class="d-flex align-center">
      <v-icon class="mr-2">mdi-account-group</v-icon>
      <h2 class="group-name">Trabajo de DBD</h2>
      <v-spacer></v-spacer>
      <div class="user-profile">
        <v-icon>mdi-account-circle</v-icon>
        <span class="username">Nombre de usuario</span>
        <v-btn icon color="primary" @click="logout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
    </v-card-title>

    <v-card class="mx-4 members-card" elevation="0" flat>
      <v-card-title>
        <h5 class="group-role">Rol en el grupo: ADMINISTRADOR</h5>
      </v-card-title>

<v-col cols="12" sm="6">
            <v-card class="options-menu">
              <v-list dense>
                <v-list-item class="option-item" v-for="(item, index) in optionsMenu" :key="index" @click="navigateTo(item.route)">
                  <v-list-item-icon>
                    <v-icon :color="item.color">{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.label }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          
      <v-icon class="team-icon">mdi-account-multiple</v-icon>
      <v-data-table
        :items-per-page="itemsPerPage"
        :headers="headers"
        :items="members"
        item-value="name"
        class="elevation-1 members-table"
      ></v-data-table>

    </v-card>
  </v-card>
</template>

<script>
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
          { title: 'Calificación en el grupo', align: 'end', key: 'calificación' },
        ],
        members: [
          {
            name: 'Marcos Hidalgo',
            rol: 'Administrador',
            calificación: 3.00,
          },
          {
            name: 'Jonathan Figueroa',
            rol: 'Moderador',
            calificación: 3.50,
          },
          {
            name: 'Ever Burga',
            rol: 'Supervisor',
            calificación: 4.00,
          },
          {
            name: 'Gabriel Farfan',
            rol: 'Miembro',
            calificación: 4.50,
          },
          {
            name: 'Sebas Salirrosas',
            rol: 'Miembro',
            calificación: 4.00,
          },
        ],

        optionsMenu: [
          { label: "Enviar invitación al grupo", icon: "mdi-email", color: "primary", route: "invite-group" },
          { label: "Editar roles de miembros", icon: "mdi-account-settings", color: "primary", route: "edit-roles" },
          { label: "Crear subgrupos", icon: "mdi-folder-plus", color: "primary", route: "create-subgroup" }
        ]
      }
  },
  methods: {
    navigateTo(route) {
      // Implementa aquí la lógica para navegar a la vista correspondiente según la ruta proporcionada
      console.log("Navegar a la vista:", route);
    },
    logout() {
      // Implementa aquí la lógica para cerrar sesión
      console.log("Cerrar sesión");
    }
  }
};
</script>

<style scoped>
.group-name {
  font-size: 24px;
  color: white;
  background: linear-gradient(to right, #2196f3, #1769aa);
  padding: 10px;
  margin-bottom: 16px;
}
.user-profile {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.user-profile v-icon {
  margin-right: 8px;
}
.user-profile .username {
  font-size: 16px;
  color: #616161;
} 
.members-card {
  max-width: 50%;
  margin: 0 auto;
}

.members-table {
  width: 100%;
}

.options-menu {
  margin-bottom: 16px;
  display: inline-block;
  background-color: #e8eaf6;
  padding: 8px;
  border-radius: 4px;
}

</style>