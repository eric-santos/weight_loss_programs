import React from "react";
import "./Jumbo.css";
import yoga from "../../images/there-women-in-a-yoga-session-917732.jpg";

const Jumbo = () => {
  return (
    <>
      <div className="jumbo">
        <h6>Weight Loss</h6>
        <nav className="secondary-nav">
          <a href="www.google.com">Overview</a>
          <a href="www.google.com">Features</a>
          <a href="www.google.com">programs</a>
          <a href="www.google.com">Training</a>
        </nav>
      </div>
      <img
        src={yoga}
        alt="three women in a yoga session"
        className="yoga-image"
      />
    </>
  );
};

export default Jumbo;
