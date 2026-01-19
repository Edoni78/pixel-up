import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import "./Footer.css";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const footer = t.footer;

  const phoneNumber = "38349341719";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    footer.contact.whatsappText
  )}`;

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* BRAND */}
        <div className="footer__brand">
          <h3>{footer.brand.name}</h3>
          <p>{footer.brand.description}</p>
        </div>

        {/* LINKS */}
        <div className="footer__col">
          <h4>{footer.pages.title}</h4>
          <Link to="/">{footer.pages.home}</Link>
          <a href="#about">{footer.pages.about}</a>
          <a href="#services">{footer.pages.services}</a>
          <a href="#contact">{footer.pages.contact}</a>
        </div>

        {/* CONTACT */}
        <div className="footer__col">
          <h4>{footer.contact.title}</h4>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> {footer.contact.whatsapp}
          </a>
          <a href={`mailto:${footer.contact.email}`}>
            <FaEnvelope /> {footer.contact.email}
          </a>
        </div>

        {/* NEWSLETTER */}
        <div className="footer__newsletter">
          <h4>{footer.newsletter.title}</h4>
          <p>{footer.newsletter.description}</p>

          <div className="newsletter__form">
            <input
              type="email"
              placeholder={footer.newsletter.placeholder}
              aria-label={footer.newsletter.ariaEmail}
            />
            <button aria-label={footer.newsletter.ariaSubscribe}>
              <FaPaperPlane />
            </button>
          </div>

          {/* SOCIAL */}
          <div className="footer__social">
            <button aria-label="Instagram">
              <FaInstagram />
            </button>
            <button aria-label="LinkedIn">
              <FaLinkedin />
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer__bottom">
        © {new Date().getFullYear()} {footer.brand.name}.{" "}
        {footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
