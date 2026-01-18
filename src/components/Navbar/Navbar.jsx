import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          <Link to="/">PixelUp</Link>
        </div>

        {/* Links */}
        <nav className="navbar__links">
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* CTA */}
        <div className="navbar__cta">
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
