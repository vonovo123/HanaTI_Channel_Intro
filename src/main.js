import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import store from './store';
import router from './router';

createApp(App)
  .use(router)
  .use(store)
  .use(Router)
  .mount('#app');
