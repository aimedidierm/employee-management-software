import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import axios from 'axios';
import router from './router';

axios.defaults.baseURL = 'https://kudibooksapi.aimedidierm.xyz/api';
axios.defaults.withCredentials = true;

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;
app.mount('#app');

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});