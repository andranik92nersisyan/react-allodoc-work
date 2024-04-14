import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationRu from "../Components/Data/translationsRu.json";
import translationEn from "../Components/Data/translationEn.json";

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng:"ru",
    resources:{
        ru:translationRu,
        en:translationEn
    }
})

export default i18n;