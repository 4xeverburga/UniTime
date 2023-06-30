<template>
  <v-app>
    <v-content>
      <Calendario />
    </v-content>
  </v-app>
</template>
<script>
import Calendario from '@/components/horarios/Calendario.vue'

export default{
  name: 'HorariosView',
  components:{
    Calendario
  },
  data: () => ({
    //
  })
};
</script>