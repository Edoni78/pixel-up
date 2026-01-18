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

const steps = [
  {
    icon: <FaComments />,
    title: "Consultation",
    desc: "We discuss your goals, audience and requirements.",
    details:
      "We start with a detailed consultation via Google Meet. We discuss your business goals, target audience, competitors, and expectations. This step ensures we fully understand your vision before moving forward.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Design",
    desc: "We create a clean, modern and user-focused design.",
    details:
      "Based on the consultation, we design a modern and user-friendly interface. You will review the design, request changes, and approve the final layout before development begins.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    desc: "We build a fast, responsive and scalable website.",
    details:
      "We turn the approved design into a fully functional website. The site is optimized for speed, mobile responsiveness, and scalability using modern technologies.",
  },
  {
    icon: <FaRocket />,
    title: "Launch",
    desc: "Your website goes live, optimized and ready to grow.",
    details:
      "After final testing, your website is deployed and goes live. We ensure everything works perfectly and provide guidance for future updates and growth.",
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="process">
      <div className="process__container">
        {/* HEADER */}
        <div className="process__header">
          <h2>
            Our <span>Process</span>
          </h2>
          <p>
            A simple and transparent workflow that turns ideas into powerful
            websites.
          </p>
        </div>

        {/* STEPS */}
        <div className="process__steps">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className="process__step"
                onClick={() => setActiveStep(step)}
              >
                <div className="process__circle">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                <span className="process__more">Click for more</span>
              </div>

              {index < steps.length - 1 && (
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
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Process;
