import React, { createContext, useContext, useState } from "react";

import en from "../translations/en.json";
import de from "../translations/de.json";
import al from "../translations/al.json";

const translations = {
  en,
  de,
  al,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en"); 

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
