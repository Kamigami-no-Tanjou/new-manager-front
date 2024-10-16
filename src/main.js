import './assets/main.css';

import { fr } from './translations/fr.messages.js';
import { en } from './translations/en.messages.js';

import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { register } from 'swiper/element/bundle';
import App from './App.vue';
import router from './router';

// Note: Translations other than french are not complete (some of the base data is still in French)
const i18n = new createI18n({
  legacy: false,
  locale: 'fr',
  messages: {
    fr,
    en
  }
});
const app = createApp(App);

register(); // register Swiper custom elements

app.use(i18n);
app.use(router);

app.mount('#app');
