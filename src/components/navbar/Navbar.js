import React from "react";
import logo from "../../images/IFIT.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <a href="#">
            <h6>Login</h6>
          </a>
          <a href="about.html">
            <h6>Signup</h6>
          </a>
          <a href="#">
            <h6>Menu</h6>
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
