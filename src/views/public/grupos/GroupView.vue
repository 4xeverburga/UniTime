<template>
  <v-card class="ma-16" elevation="0">
    <v-card-title class="d-flex align-center">
      <v-icon class="mr-2">mdi-account-group</v-icon>
      <h2 class="group-name">{{ grupos.grupo }}</h2>
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
        <h5 class="group-role">Rol en el grupo: {{grupos.rol}}</h5>
      </v-card-title>

      <v-card-title>
        <h4 class="group-description"><b>Descripción del grupo:</b></h4>
      </v-card-title>

      <v-card-text>
        <v-container fluid>
          <v-row justify="start">
            <v-col cols="12" sm="10" >
              <v-card class="group-description-box">
                <p class="group-description" style="min-height: 200px; min-width: 70%;">
                  {{ grupos.descripcion }}
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" sm="2">
              <v-btn color="primary" @click="abrirDialog" class="button_editar">Editar Nombre</v-btn>
      <editar-nombre-grupo-dialog ref="editarNombreGrupoDialog" @grupoEditado="actualizarGrupo"></editar-nombre-grupo-dialog>
      <div></div>
      <v-btn color="primary" @click="abrirDialog2" class="button_editar">Editar Descripción</v-btn>
      <editar-descripcion-grupo-dialog ref="editarDescripcionGrupoDialog" @grupoEditado="actualizarGrupo"></editar-descripcion-grupo-dialog>
      <div></div>
      <v-btn color="red" @click="abrirDialog3" class="button_editar">Eliminar Grupo</v-btn>
      <eliminar-grupo-dialog ref="eliminarGrupoDialog" ></eliminar-grupo-dialog>
    
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
import axios from "axios";
import EditarNombreGrupoDialog from '../../../components/grupos/EditarNombreGrupoDialog.vue';
import EditarDescripcionGrupoDialog from '../../../components/grupos/EditarDescripcionGrupoDialog.vue';
import EliminarGrupoDialog from '../../../components/grupos/EliminarGrupoDialog.vue';

export default {
  components: {
    EditarNombreGrupoDialog,
    EditarDescripcionGrupoDialog,
    EliminarGrupoDialog
  },
  data() {
    return {
      grupos: {
        grupo: "",
        descripcion: "",
        rol: ""
      }
    };
  },
  created() {
    this.actualizarGrupo();
  },
  methods: {
    actualizarGrupo() {
      axios
        .get(`http://localhost:8080/gruposapi/getgrupos/${this.$route.params.id}`)
        .then((response) => {
          const data = response.data;
          if (data.length > 0) {
            this.grupos.grupo = data[0].grupo;
            this.grupos.descripcion = data[0].descripcion;
            this.grupos.rol = data[0].rol;
            console.log(this.$route.params.id);
          }
        })
    .catch((error) => {
      console.error(error);
    });
  },
    abrirDialog() {
      const nombreGrupoActual = this.grupos.grupo;

      // Establecer el nombre actual como valor predeterminado en el campo de texto
      this.$refs.editarNombreGrupoDialog.nombreGrupo = nombreGrupoActual;


      this.$refs.editarNombreGrupoDialog.dialogVisible = true;
    },
    abrirDialog2() {
      const descripcionActual = this.grupos.descripcion;
      this.$refs.editarDescripcionGrupoDialog.descripcionGrupo = descripcionActual;
      this.$refs.editarDescripcionGrupoDialog.dialogVisible2= true;
    },
    abrirDialog3() {
      this.$refs.eliminarGrupoDialog.dialogVisible3 = true;
    },
    logout() {
      console.log("Cerrar sesión");
    }
  },

};
</script>
<style scoped>
.group-name {
  font-size: 24px;
  margin-left: 8px;
}

.user-profile {
  display: flex;
  align-items: center;
}

.username {
  margin-left: 4px;
}

.group-role {
  font-size: 16px;
  margin-bottom: 8px;
}

.group-description {
  font-size: 14px;
  color: #616161;
}

.group-description-box {
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
}

.options-actions {
  margin-top: 16px;
}

.action-button {
  margin-right: 8px;
}
</style>
