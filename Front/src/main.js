import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueJwtDecode from 'vue-jwt-decode'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import Toasted from 'vue-toasted';

import './assets/main.css'
import './index.css'
import './services/auth.service'

const app = createApp(App)

app.use(router)

app.use(VCalendar, {})


app.mount('#app')
