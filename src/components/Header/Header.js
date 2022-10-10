import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="" />
      <div className="header-title">
        <h2>Shortlister</h2>
        <p>shortlist candidates and save your budget</p>
        <h3 className="budget">
          Total Budget: <span className="money">$ 300000</span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Header;
