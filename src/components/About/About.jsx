import React from "react";
import "./About.css";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <section className="about" id="about">
      <div className="about__container">

        <div className="about__text">
          <h2>
            {about.title} <span>{about.brand}</span>
          </h2>

          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <ul className="about__list">
            {about.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="about__cards">
          {about.cards.map((card, i) => (
            <div className="about__card" key={i}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
