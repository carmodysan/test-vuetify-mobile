import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import Vue from 'vue'
import VueRouter from 'vue-router'

import vuetify from './plugins/vuetify'

import App from './components/App'
import Home from './components/Home'
import MyCard from './components/MyCard'

const routes = [
    { path: '/home', component: Home, name: 'home' },
    { path: '/card', component: MyCard, name: 'card' }
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
})

Vue.use(VueRouter)

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
