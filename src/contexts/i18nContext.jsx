import * as React from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

const locales = { en, es };

const i18nContext = React.createContext({
  language: "",
  setLanguage: () => {},
});

export function useI18n() {
  return React.useContext(i18nContext);
}

export function I18nProvider({ children }) {
  const [language, setLanguage] = React.useState("en");

  function t(key) {
    return locales[language][key] || key;
  }

  return (
    <i18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </i18nContext.Provider>
  );
}
