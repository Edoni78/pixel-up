import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./CTA.css";
import { useLanguage } from "../../context/LanguageContext";

const CTA = () => {
  const { t } = useLanguage();
  const cta = t.cta;

  const phoneNumber = "38349341719";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    cta.whatsappText
  )}`;

  return (
    <section className="cta">
      <div className="cta__container">
        <h2>
          {cta.title} <span>{cta.highlight}</span> {cta.titleEnd}
        </h2>

        <p>{cta.description}</p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cta__whatsapp"
        >
          <FaWhatsapp />
          <span>{cta.button}</span>
        </a>
      </div>
    </section>
  );
};

export default CTA;
