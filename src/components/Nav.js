import React, { useState } from "react";
import "../styles/Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  // Toggle Menu
  const [Mobile, setMobile] = useState(false);
  return (
    <div className="nav">
      <div className="nav-list">
        <div className="nav-logo">
          <div className="nav-logoo" to="/">
            <img src="./images/logo.png" alt="" />
          </div>
        </div>
        <ul
          className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
          onClick={() => setMobile(false)}
        >
          <li>
            <div className="nav-link" to="/">
              Home
            </div>
          </li>
          <li>
            <div className="nav-link" to="/Biography">
              Biography
            </div>
          </li>
          <li>
            <div className="nav-link" to="/Timeline">
              Timeline
            </div>
          </li>
          <li>
            <div className="nav-link" to="/Gallery">
              Gallery
            </div>
          </li>
          <li>
            <div className="nav-link" to="/Tribute">
              Tribute
            </div>
          </li>
        </ul>
        <div className="toggle" onClick={() => setMobile(!Mobile)}>
          {Mobile ? (
            <div className="close">
              <FaTimes />
            </div>
          ) : (
            <div className="open">
              <FaBars />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
