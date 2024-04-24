import dayjs from "dayjs";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { i18nConfig } from "./config";
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE_KEY } from "./constants";
import { isBrowser } from "./../ssr";

dayjs.locale(DEFAULT_LANGUAGE_KEY);

i18n.use(initReactI18next).init(i18nConfig);

i18n.on("languageChanged", (langKey) => {
  const language = AVAILABLE_LANGUAGES.find(({ key }) => key === langKey);
  dayjs.locale(langKey);
  if (isBrowser) {
    document.documentElement.lang = langKey;
    document.documentElement.dir = language?.dir ?? "ltr";
    document.documentElement.style.fontSize = `${
      (language?.fontScale ?? 1) * 100
    }%`;
  }
});

export default i18n;
