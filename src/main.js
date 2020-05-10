import { createApp } from 'vue';
import App from './App.vue'
import router from './router';
import {axiosInstall} from './axios'
createApp(App).use(router).use(axiosInstall).mount('#app')
