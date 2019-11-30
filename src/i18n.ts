import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation from "./translation.json";

const resources = {
  en: { translation }
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources
});

export default i18n;
