import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueJwtDecode from 'vue-jwt-decode'

import './assets/main.css'
import './index.css'
import './services/auth.service'

const app = createApp(App)

app.use(router)

app.mount('#app')
