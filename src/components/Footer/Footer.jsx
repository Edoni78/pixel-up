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

const Footer = () => {
  const phoneNumber = "38349341719";
  const message =
    "Hello PixelUp, I am interested in building a website.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* BRAND */}
        <div className="footer__brand">
          <h3>PixelUp</h3>
          <p>
            We design and build modern websites that help businesses grow
            online. Fully remote. Fully focused.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer__col">
          <h4>Pages</h4>
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* CONTACT */}
        <div className="footer__col">
          <h4>Contact</h4>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="mailto:hello@pixelup.com">
            <FaEnvelope /> hello@pixelup.com
          </a>
        </div>

        {/* NEWSLETTER */}
        <div className="footer__newsletter">
          <h4>Newsletter</h4>
          <p>Get tips & updates about web design.</p>

          <div className="newsletter__form">
            <input type="email" placeholder="Your email address" />
            <button>
              <FaPaperPlane />
            </button>
          </div>

          <div className="footer__social">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer__bottom">
        © {new Date().getFullYear()} PixelUp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
