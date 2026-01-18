import React from "react";
import {
  FaLaptopCode,
  FaRocket,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__container">
        {/* HEADER */}
        <div className="services__header">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
            Everything you need to launch, grow and scale your online presence
            with confidence.
          </p>
        </div>

        {/* GRID */}
        <div className="services__grid">
          <div className="service__card">
            <div className="service__icon">
              <FaLaptopCode />
            </div>
            <h3>Business Websites</h3>
            <p>
              Modern, fast and professional websites built to represent your
              brand and convert visitors.
            </p>
            <span className="service__badge">Most Popular</span>
          </div>

          <div className="service__card">
            <div className="service__icon">
              <FaRocket />
            </div>
            <h3>Landing Pages</h3>
            <p>
              High-converting landing pages designed for ads, promotions and
              product launches.
            </p>
          </div>

          <div className="service__card">
            <div className="service__icon">
              <FaShoppingCart />
            </div>
            <h3>E-commerce</h3>
            <p>
              Online stores with secure payments, product management and smooth
              user experience.
            </p>
          </div>

          <div className="service__card">
            <div className="service__icon">
              <FaTools />
            </div>
            <h3>Maintenance & Support</h3>
            <p>
              Ongoing updates, performance optimization and technical support
              for peace of mind.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Services;
