import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

loadFonts()
library.add(faUserSecret)

createApp(App).use(router).use(router)
  .use(vuetify)
  .mount('#app')
  .component('font-awesome-icon', FontAwesomeIcon)

