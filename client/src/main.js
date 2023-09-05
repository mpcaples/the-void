import './assets/reset.css'
import 'primevue/resources/themes/lara-dark-indigo/theme.css'

import { createApp } from 'vue'
import router from './router/index'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'

const app = createApp(App);
app.use(router)
app.use(createPinia())
app.use(PrimeVue);
app.mount('#app')
