import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        {/* LEFT */}
        <div className="about__cards">
          <div className="about__card">
            <h3>Clean Design</h3>
            <p>
              Minimal, modern interfaces that reflect your brand and build
              trust.
            </p>
          </div>

          <div className="about__card">
            <h3>Performance</h3>
            <p>
              Optimized websites that load fast and work perfectly on all
              devices.
            </p>
          </div>

          <div className="about__card">
            <h3>Growth Ready</h3>
            <p>
              Scalable foundations so your website grows together with your
              business.
            </p>
          </div>
        </div>

      {/* RIGHT */}
        <div className="about__text">
          <h2>
            About <span>PixelUp</span>
          </h2>

          <p>
            PixelUp is a digital studio focused on creating modern, clean and
            high-converting websites for businesses that want to stand out
            online.
          </p>

          <p>
            We combine strategy, design and development to deliver fast,
            reliable and scalable web solutions tailored to your business
            goals.
          </p>

          <ul className="about__list">
            <li>Custom website design</li>
            <li>Business-focused solutions</li>
            <li>Fast delivery & clear communication</li>
            <li>Long-term support</li>
          </ul>
        </div>


      </div>
    </section>
  );
};

export default About;
