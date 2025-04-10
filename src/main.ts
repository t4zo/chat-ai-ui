import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { router } from './router'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

pinia.use(piniaPluginPersistedState)

app.use(router)
app.use(pinia)

app.mount('#app')
