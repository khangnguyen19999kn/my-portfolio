import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locale/en.json';
import vn from './locale/vn.json';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    vn: {
      translation: vn,
    },
  },
  lng: localStorage.getItem('language') || 'en',
});

export default i18next;
