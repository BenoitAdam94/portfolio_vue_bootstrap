import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'



import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
import Profile from './views/Profile.vue'
import Contact from './views/Contact.vue'
import Mentions from './views/Mentions.vue'
import Services from './views/Services.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/profile', component: Profile },
    { path: '/mentions', component: Mentions },
    { path: '/contact', component: Contact },
    { path: '/services', component: Services }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')