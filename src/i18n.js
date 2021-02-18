import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import am from "./i18n/am.json";
import en from "./i18n/en.json";

function i18nConfig () {
    const resources = {
      en: {
        translation: en
      },
      am: {
        translation: am
      }
    };
    
    console.log(localStorage.getItem('language'));


    const languages = ['en', 'am']
    i18n
      .use(initReactI18next)
      .init({
        resources,
        lng: localStorage.getItem('language') || "en",
        whitelist: languages,
        keySeparator: false,
    
        interpolation: {
          escapeValue: false
        }
      });
}



export default i18nConfig()