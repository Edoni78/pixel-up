import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

import flagEn from "../../assets/flags/en.webp";
import flagDe from "../../assets/flags/de.webp";
import flagAl from "../../assets/flags/al.png";

import { useLanguage } from "../../context/LanguageContext";

const flagsMap = {
  en: flagEn,
  de: flagDe,
  al: flagAl,
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="PixelUp Logo" />
          <span>PixelUp</span>
        </Link>

        {/* Links */}
        <nav className="navbar__links">
          <Link to="/">{t.navbar.home}</Link>
          <a href="#about">{t.navbar.about}</a>
          <a href="#services">{t.navbar.services}</a>
          <a href="#contact">{t.navbar.contact}</a>
        </nav>

        {/* CTA */}
        <div className="navbar__cta">
          <a href="#contact" className="btn-primary">
            {t.navbar.contactUs}
          </a>
        </div>

        {/* Language Switch */}
        <div className="lang-switch">
          <button
            className="lang-current"
            onClick={() => setLangOpen(!langOpen)}
          >
            <img
              src={flagsMap[lang]}
              alt={lang}
              className="lang-flag-current"
            />
          </button>

          {langOpen && (
            <div className="lang-menu">
              <div onClick={() => { setLang("en"); setLangOpen(false); }}>
                <img src={flagEn} alt="English" className="lang-flag" />
                <span>{t.navbar.language.english}</span>
              </div>

              <div onClick={() => { setLang("de"); setLangOpen(false); }}>
                <img src={flagDe} alt="Deutsch" className="lang-flag" />
                <span>{t.navbar.language.german}</span>
              </div>

              <div onClick={() => { setLang("al"); setLangOpen(false); }}>
                <img src={flagAl} alt="Albanian" className="lang-flag" />
                <span>{t.navbar.language.albanian}</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;
