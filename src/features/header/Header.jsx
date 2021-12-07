import React, { useRef } from "react";
import "./header.css";

import logo from "../../assets/img/logo.png";
import logo2 from "../../assets/img/logo@2x.png";
import logo3 from "../../assets/img/logo@3x.png";

import menu from "../../assets/img/menu.png";
import x from "../../assets/img/x.png";

const Header = () => {
  const toggleMenuRef = useRef(null);

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} srcSet={(logo2, logo3)} alt="logo" />
      </div>
      <div
        className="header-nav__toggle"
        onClick={() => toggleMenuRef.current.classList.toggle("active")}
      >
        <img src={menu} alt="" />
      </div>
      <div className="header-nav" ref={toggleMenuRef}>
        <div
          className="header-nav__toggle-close"
          onClick={() => toggleMenuRef.current.classList.toggle("active")}
        >
          <img src={x} alt="" />
        </div>
        <ul className="header-nav__menu-main">
          <li>Introduction</li>
          <li>Solution</li>
          <li>Rate Plan</li>
        </ul>
        <div className="vertical-line-break"></div>
        <ul className="header-nav__menu-user">
          <li>Login</li>
          <li>Apply for free use</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
