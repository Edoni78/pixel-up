import React from "react";
import {
  FaCheckCircle,
  FaBolt,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import "./WhyUs.css";

import whyUsImg from "../../assets/images/whyUs.png";

const WhyUs = () => {
  return (
    <section className="whyus">
      <div className="whyus__container">
        {/* LEFT – ILLUSTRATION */}
        <div className="whyus__image">
          <img src={whyUsImg} alt="Why choose PixelUp" />
        </div>

        {/* RIGHT – CONTENT */}
        <div className="whyus__content">
          <h2>
            Why choose <span>PixelUp</span>
          </h2>

          <p className="whyus__intro">
            We don’t just build websites. We help businesses create a strong
            digital presence that drives real results.
          </p>

          <div className="whyus__features">
            <div className="whyus__feature">
              <FaBolt size={30} />
              <div>
                <h4>Fast Delivery</h4>
                <p>Get your website live quickly without sacrificing quality.</p>
              </div>
            </div>

            <div className="whyus__feature">
              <FaCheckCircle size={30} />
              <div>
                <h4>Clean & Modern Design</h4>
                <p>Designs that look professional and build trust instantly.</p>
              </div>
            </div>

            <div className="whyus__feature">
              <FaHandshake size={30} />
              <div>
                <h4>Business Focused</h4>
                <p>Every decision is made with your business goals in mind.</p>
              </div>
            </div>

            <div className="whyus__feature">
              <FaChartLine size={30} />
              <div>
                <h4>Growth Ready</h4>
                <p>Scalable foundations that grow together with your business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
