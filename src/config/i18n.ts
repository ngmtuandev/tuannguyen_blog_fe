import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import vietnamese from "../translations/vi/vietnamese.json";
import english from "../translations/en/english.json";
import { handleGetLocalStorage } from "../helper/Xfunction";
import { LANGUAGE } from "../utils/constant";

i18n.use(initReactI18next).init({
  fallbackLng: LANGUAGE.VI,
  lng: handleGetLocalStorage(LANGUAGE.KEY) || LANGUAGE.VI,
  resources: {
    en: {
      language: english,
    },
    vi: {
      language: vietnamese,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
