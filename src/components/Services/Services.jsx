import React from "react";
import {
  FaLaptopCode,
  FaRocket,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";
import "./Services.css";
import { useLanguage } from "../../context/LanguageContext";

const icons = [
  <FaLaptopCode />,
  <FaRocket />,
  <FaShoppingCart />,
  <FaTools />,
];

const Services = () => {
  const { t } = useLanguage();
  const services = t.services;

  return (
    <section className="services" id="services">
      <div className="services__container">

        {/* HEADER */}
        <div className="services__header">
          <h2>
            {services.title} <span>{services.highlight}</span>
          </h2>
          <p>{services.description}</p>
        </div>

        {/* GRID */}
        <div className="services__grid">
          {services.items.map((item, index) => (
            <div className="service__card" key={index}>
              <div className="service__icon">
                {icons[index]}
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>

              {item.badge && (
                <span className="service__badge">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
