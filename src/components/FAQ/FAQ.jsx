import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";
import { useLanguage } from "../../context/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  const faq = t.faq;

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__container">

        {/* HEADER */}
        <div className="faq__header">
          <h2>
            {faq.title} <span>{faq.highlight}</span>
          </h2>
          <p>{faq.description}</p>
        </div>

        {/* FAQ LIST */}
        <div className="faq__list">
          {faq.items.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq__question">
                <span>{item.q}</span>
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </div>

              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
