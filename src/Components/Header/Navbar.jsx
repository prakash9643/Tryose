// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/logo.png";
import logo_text from "../../Assests/logo-text.png";
import Fav from "../../Assests/mdi_favorite.svg";
import Profile from "../../Assests/healthicons.svg";
import "./Navbar.css";


function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <img src={logo_text} alt="Logo-text" />
          <ul className="navbar-links">
            <Link className="Navbaritems" to="/">
              BELGIUM
            </Link>
            <Link className="Navbaritems" to="/about">
              WINTER
            </Link>
            <Link className="Navbaritems" to="/contact">
              BRASIL
            </Link>
            <Link className="Navbaritems" to="/">
              EVENTS
            </Link>
            <Link className="Navbaritems" to="/about">
              STORE
            </Link>
            <Link className="Navbaritems" to="/contact">
              FAQ
            </Link>
            <Link className="Navbaritems" to="/contact">
              MORE
            </Link>
          </ul>
        </div>
      </nav>
      <div className="navbar-middle">
        <h1>DESIGNED FOR THE PEOPLE OF TOMORROW</h1>
      </div>
      <nav className="navbar d-flex aling-items-center justify-content-between">
        <ul className="navbar-links main-menu">
          <Link className="Navbaritems" to="/">
            MEN
          </Link>
          <Link className="Navbaritems" to="/about">
            WOMEN
          </Link>
          <Link className="Navbaritems" to="/contact">
            KIDS
          </Link>
          <Link className="Navbaritems" to="/">
            Custom Wears
          </Link>
          <Link className="Navbaritems" to="/about">
            Your Designs
          </Link>
        </ul>
        <ul className="user-icon">
          <li>
            <span>
              <img src={Fav} />
            </span>
          </li>
          <li>
            <span>
              <img src={Fav} />
            </span>
          </li>
          <li>
            <span>
              <img src={Profile} />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
