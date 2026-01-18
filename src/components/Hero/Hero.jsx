import React from "react";
import heroVideo from "../../assets/videos/hero.mp4"; 
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* VIDEO BACKGROUND */}
      <video
        className="hero__video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY */}
      <div className="hero__overlay" />

      {/* CONTENT */}
      <div className="hero__container">
        <div className="hero__content">
          <h1>
            Websites that <span className="bounce">grow</span> your business
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
      </div>
    </section>
  );
};

export default Hero;
