import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routers'
import App from './App.vue'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
