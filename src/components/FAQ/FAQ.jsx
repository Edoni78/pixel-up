import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most websites are completed within 7–14 days, depending on the size and complexity of the project.",
  },
  {
    q: "Do you offer consultations before starting?",
    a: "Yes. We start every project with a free consultation via Google Meet to understand your goals and needs.",
  },
  {
    q: "Will my website be mobile friendly?",
    a: "Absolutely. Every website we build is fully responsive and optimized for all devices.",
  },
  {
    q: "Can I request changes after the design is ready?",
    a: "Yes. You can request revisions during the design phase before development starts.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We offer ongoing maintenance, updates, and support packages after your website goes live.",
  },
];

const FAQ = () => {
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
            Frequently Asked <span>Questions</span>
          </h2>
          <p>
            Everything you need to know before starting your project with
            PixelUp.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="faq__list">
          {faqs.map((item, index) => (
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
