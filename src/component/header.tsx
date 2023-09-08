import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import './/layout.css'


const Header: React.FC = () => {

  return (
    <div className="navbar">
      <header className="header">
        <div className="logo-wrapper">
          <FontAwesomeIcon icon={faHome} className="nav-logo" />
          <Link to="/">
            <h1 className="name">DataGuri</h1>
          </Link>
        </div>
    {/* <FontAwesomeIcon icon= {faBars} className="icon-menu"/> */}
        <FontAwesomeIcon icon={faBell} className="notification" />
      </header>

    </div>
  );
};

export default Header;
