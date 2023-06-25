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

  <v-card class="mx-4" elevation="0" flat>
    <v-card-title>
      <h5 class="group-role">Rol en el grupo: ADMINISTRADOR</h5>
    </v-card-title>

    <v-card-title>
      <h4 class="group-description"><b>Descripción del grupo:</b></h4>
    </v-card-title>

    <v-card-text>
      <v-container fluid>
        <v-row justify="start">
          <v-col cols="12" sm="6">
            <v-card class="group-description-box">
              <p class="group-description">
                Grupo formado por estudiantes que están llevando el curso de Diseño de Base de Datos, para la elaboración de un prototipo en base a la gestión de horarios.
              </p>
            </v-card>
          </v-col>

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
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>

  <v-card-actions class="options-actions">
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn color="primary" class="action-button" @click="navigateTo('members')">
          <v-icon left>mdi-account-group</v-icon>
          Miembros de grupo
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" class="action-button" @click="navigateTo('events')">
          <v-icon left>mdi-calendar</v-icon>
          Eventos de grupo
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" class="action-button" @click="navigateTo('tasks')">
          <v-icon left>mdi-format-list-bulleted</v-icon>
          Tareas del grupo
        </v-btn>
      </v-col>
    </v-row>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  data() {
    return {
      optionsMenu: [
        { label: "Editar nombre de grupo", icon: "mdi-pencil", color: "primary", route: "edit-name" },
        { label: "Editar descripción", icon: "mdi-pencil", color: "primary", route: "edit-description" },
        { label: "Eliminar grupo", icon: "mdi-delete", color: "red darken-2", route: "delete-group" }
      ]
    };
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

<style>
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.group-name {
  font-size: 24px;
  color: white;
  background: linear-gradient(to right, #2196f3, #1769aa);
  padding: 10px;
  margin-bottom: 16px;
}

.group-role {
  margin-bottom: 16px;
  font-size: 18px;
  color: #616161;
}

.group-description {
  font-size: 18px;
  margin-bottom: 16px;
  color: #424242;
}

.group-description-box {
  background-color: #f5f5f5;
  padding: 16px;
}

.options-menu {
  margin-bottom: 16px;
  display: inline-block;
  background-color: #e8eaf6;
  padding: 8px;
  border-radius: 4px;
}

.option-item {
  cursor: pointer;
}

.action-button {
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 4px;
}

.action-button.primary {
  background-color: #2196f3;
}

.action-button.primary:hover {
  background-color: #1769aa;
}

.action-button.red {
  background-color: #f44336;
}

.action-button.red:hover {
  background-color: #d32f2f;
}

.options-actions {
  margin-top: 16px;
}

/* Estilos adicionales */
@media (max-width: 600px) {
  .group-description-box {
    padding: 8px;
  }
  
  .options-menu {
    padding: 4px;
  }
  
  .action-button {
    font-size: 14px;
    padding: 8px 12px;
    margin: 0 8px;
  }

  .group-name {
    display: flex;
    align-items: center;
  }

  .group-name v-icon {
    margin-right: 8px;
  }

  .options-actions {
    margin-top: 32px;
  }

  .options-actions v-btn {
    font-size: 16px;
    padding: 12px 24px;
  }
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

</style>