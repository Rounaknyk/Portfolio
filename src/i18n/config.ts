import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enWorks from './locales/en/works.json';
import enProject from './locales/en/project.json';
import enCommon from './locales/en/common.json';

const resources = {
    en: {
        home: enHome,
        about: enAbout,
        works: enWorks,
        project: enProject,
        common: enCommon,
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
