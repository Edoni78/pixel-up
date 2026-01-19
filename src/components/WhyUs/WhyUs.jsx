import React from "react";
import {
  FaCheckCircle,
  FaBolt,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import "./WhyUs.css";
import whyUsImg from "../../assets/images/whyUs.png";
import { useLanguage } from "../../context/LanguageContext";

const icons = [
  <FaBolt size={30} />,
  <FaCheckCircle size={30} />,
  <FaHandshake size={30} />,
  <FaChartLine size={30} />,
];

const WhyUs = () => {
  const { t } = useLanguage();
  const whyUs = t.whyUs;

  return (
    <section className="whyus">
      <div className="whyus__container">

        {/* LEFT – IMAGE */}
        <div className="whyus__image">
          <img src={whyUsImg} alt="Why choose PixelUp" />
        </div>

        {/* RIGHT – CONTENT */}
        <div className="whyus__content">
          <h2>
            {whyUs.title} <span>{whyUs.brand}</span>
          </h2>

          <p className="whyus__intro">{whyUs.intro}</p>

          <div className="whyus__features">
            {whyUs.features.map((item, index) => (
              <div className="whyus__feature" key={index}>
                {icons[index]}
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
