import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "../public/locales/en"
import ru from "../public/locales/ru"
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      ru: { translation: ru },
      en: { translation: en },
    },
    interpolation: {
      escapeValue: false,
    },
  });

const langFromLocalStorage = localStorage.getItem("lang");

if (langFromLocalStorage && (langFromLocalStorage === "en" || langFromLocalStorage === "ru")) {
  i18n.changeLanguage(langFromLocalStorage);
} else {
  i18n.changeLanguage("en");
}

export default i18n;
