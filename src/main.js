import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

loadFonts()

createApp(App).use(router).use(router)
  .use(vuetify)
  .mount('#app')
