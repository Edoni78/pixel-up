import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./CTA.css";

const CTA = () => {
  const phoneNumber = "38349341719"; 
  const message =
    "Hello PixelUp, I am interested in building a website for my business.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="cta">
      <div className="cta__container">
        <h2>
          Ready to <span>grow</span> your business online?
        </h2>

        <p>
          Let’s talk about your idea. We’re fully online and available for
          consultations via WhatsApp.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cta__whatsapp"
        >
          <FaWhatsapp />
          <span>Chat with us on WhatsApp</span>
        </a>
      </div>
    </section>
  );
};

export default CTA;
