import React from "react";
import "./layout.css";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../home/Home";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;
