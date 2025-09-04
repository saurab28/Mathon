import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'

import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faThumbsUp, faClock,faDeleteLeft,
  faBars,
  faClockRotateLeft,
  faHouse,
  faCalculator} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faXTwitter,faGithub} from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret, faThumbsUp, faFacebook , faXTwitter, faGithub, faClock, faDeleteLeft, faBars, faClockRotateLeft, faHouse, faCalculator )


const app = createApp(App)
app.use(router)
app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
