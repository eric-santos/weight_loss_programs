import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faPinterest,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="quote">
        <p>
          To date I have lost 14 Kilos (30 pounds) and my fitness level is at
          least the same as when I was actively <br />
          engaged in sport (if not better ), thanks to iFit and the range and
          variation of fitness programs available
        </p>
        <h6>Graham Lambourne</h6>
      </div>
      <div className="get-started">
        <pre>Get started on your weight loss journey.</pre>
        <button>JOIN IFIT TODAY</button>
      </div>
      <div className="contact">
        <a href="www.google.com">
          <h6>BLOG-VIDEOS</h6>
        </a>
        <a href="www.google.com">
          <h6>SHOP</h6>
        </a>
        <a href="www.google.com">
          <h6>COMPANY</h6>
        </a>
        <a href="www.google.com">
          <h6>PRESS</h6>
        </a>
        <a href="www.google.com">
          <h6>JOBS</h6>
        </a>
        <a href="www.google.com">
          <h6>SUPPORT</h6>
        </a>
        <a href="www.google.com">
          <h6>LEGAL</h6>
        </a>
        <a href="www.google.com">
          <h6>CONTACT</h6>
        </a>
        <div className="icons">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faGooglePlus} />
          <FontAwesomeIcon className="icon" icon={faPinterest} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faYoutube} />
        </div>
        <h6 className="copyright">&copy; All Rights Reserved</h6>
      </div>
    </div>
  );
};

export default Footer;
