import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';

const app = createApp(App, {title: 'about'});
setupRouter(app);
app.mount('#app');
