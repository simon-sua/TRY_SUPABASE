import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@varlet/touch-emulator'
import '@unocss/reset/normalize.css'
import 'virtual:uno.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
