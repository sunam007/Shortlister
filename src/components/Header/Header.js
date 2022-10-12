import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="" />
      <div className="header-title">
        <h2>Shortlister</h2>
        <p>
          <strong>- shortlist candidates and save your budget</strong>
        </p>
        <h3 className="budget">
          Monthly Budget: <span className="money">300000 BDT</span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Header;
