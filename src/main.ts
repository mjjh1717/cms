import { createApp } from 'vue'
import { globalRegister } from './global'

import './service/axios-demo'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

// registerApp(app)
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')

console.log(process.env)
