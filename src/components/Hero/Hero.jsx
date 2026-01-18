import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* LEFT CONTENT */}
        <div className="hero__content">
          <h1>
            Websites that <span>grow</span> your business
          </h1>

          <p>
            PixelUp helps businesses build modern, fast and professional
            websites that convert visitors into customers.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn-primary">
              Request a Website
            </a>
            <a href="#services" className="btn-secondary">
              Our Services
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__mock-header" />
            <div className="hero__mock-body">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
