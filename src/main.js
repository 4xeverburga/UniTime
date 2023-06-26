import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import axios from 'axios'


loadFonts()
library.add(faUserSecret)


createApp(App).use(router)
  .use(vuetify)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('EasyDataTable', Vue3EasyDataTable)
  .config.globalProperties.$axios = axios
  .mount('#app')