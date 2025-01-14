import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ENTranslation from "./resources/en.json";
import TRTranslation from "./resources/tr.json";
import DETranslation from "./resources/de.json";

export const I18nConfig = i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: ENTranslation,
    },
    tr: {
      translation: TRTranslation,
    },
    de: {
      translation: DETranslation,
    },
  },
  lng: "en",
});
