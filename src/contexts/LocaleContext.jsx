import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LocaleContext };
