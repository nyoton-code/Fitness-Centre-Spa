import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../data/En.json";
import fr from "../data/Fr.json";
import ar from "../data/Ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar }
  },
  lng: "fr", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
