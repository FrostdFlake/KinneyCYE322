import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css'
//import { createRouter, createWebHistory } from 'vue-router';
//Vue.config.productionTip = false

createApp(App).use(router).mount('#app');
