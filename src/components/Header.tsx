import { useState } from "react";
import "./styles.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle =()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="header">
        <div className="navbar">
          <div className="logo-img">
            <img src="./images/logo.svg" alt="" />
          </div>
          <div className="menu-toggle" onClick={handleToggle}>
            <img src="./images/icon-hamburger.svg" alt="" />
          </div>
          <div className={`nav-link-container ${isOpen ? "open" : ""}`}>
            <a href="#about" className="nav-item">
              About
            </a>
            <a href="#services" className="nav-item">
              Services
            </a>
            <a href="#projects" className="nav-item">
              Projects
            </a>
            <a href="#contact" className="nav-item">
              Contact
            </a>
          </div>
        </div>
        <div className="header-title">
          <h1 className="header-h1">WE ARE CREATIVES</h1>
          <img
            src="./images/icon-arrow-down.svg"
            alt=""
            className="header-img"
          />
        </div>
      </nav>
    </>
  );
}
