import React, { useState } from "react";
import {
  FaComments,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import "./Process.css";
import { useLanguage } from "../../context/LanguageContext";

const icons = [
  <FaComments />,
  <FaPencilRuler />,
  <FaCode />,
  <FaRocket />,
];

const Process = () => {
  const { t } = useLanguage();
  const process = t.process;

  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="process">
      <div className="process__container">

        {/* HEADER */}
        <div className="process__header">
          <h2>
            {process.title} <span>{process.highlight}</span>
          </h2>
          <p>{process.description}</p>
        </div>

        {/* STEPS */}
        <div className="process__steps">
          {process.steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className="process__step"
                onClick={() => setActiveStep({ ...step, icon: icons[index] })}
              >
                <div className="process__circle">
                  {icons[index]}
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                <span className="process__more">
                  {process.more}
                </span>
              </div>

              {index < process.steps.length - 1 && (
                <div className="process__arrow">
                  <FaArrowRight />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeStep && (
        <div className="process__modal-overlay">
          <div className="process__modal">
            <button
              className="process__close"
              onClick={() => setActiveStep(null)}
            >
              <FaTimes />
            </button>

            <div className="process__modal-icon">
              {activeStep.icon}
            </div>

            <h3>{activeStep.title}</h3>
            <p>{activeStep.details}</p>

            <a href="#contact" className="btn-primary">
              {process.cta}
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Process;
