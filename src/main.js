import { createApp } from 'vue';
import App from './App.vue';
import provideStore from './store';
import router from './router'

const app = createApp(App).use(router)
provideStore(app);
app.mount('#app');
