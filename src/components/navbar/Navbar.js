import React from "react";
import logo from "../../images/IFIT.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class="container">
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <a href="www.google.com">
            <h6>Login</h6>
          </a>
          <a href="www.google.com">
            <h6>Signup</h6>
          </a>
          <a href="www.google.com">
            <h6>Menu</h6>
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
