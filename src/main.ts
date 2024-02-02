import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { MotionPlugin } from '../node_modules/@vueuse/motion/dist/index';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(MotionPlugin)

app.use(createPinia())
app.use(router)

app.mount('#app');
