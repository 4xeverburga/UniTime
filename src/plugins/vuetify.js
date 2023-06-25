// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VDataTable } from 'vuetify/labs/VDataTable'

// Vuetify
import { createVuetify } from 'vuetify'
//import { VDataTable } from 'vuetify/lib/components/VDataTable'
export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {components: { VDataTable},}

)