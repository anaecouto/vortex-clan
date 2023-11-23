import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router/index.js";

const app = createApp(App);

app.use(router).mount("#app");
