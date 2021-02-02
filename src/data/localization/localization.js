import {Ru} from "./lang/ru";
import {En} from "./lang/en"

const LangStore = {
    ru: Ru,
    en: En,
}

export const GetLang = (lang) => LangStore[lang] || LangStore.ru;
