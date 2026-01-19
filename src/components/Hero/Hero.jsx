import React from "react";
import heroVideo from "../../assets/videos/hero.mp4";
import "./Hero.css";
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const hero = t.hero;

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
            {hero.title}{" "}
            <span className="bounce">{hero.highlight}</span>{" "}
            {hero.titleEnd}
          </h1>

          <p>{hero.description}</p>

          <div className="hero__actions">
            <a href="#contact" className="btn-primary">
              {hero.actions.primary}
            </a>
            <a href="#services" className="btn-secondary">
              {hero.actions.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
