import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_inner container d-flex justify-content-between">
        <p>By FAN</p>
        <div className="socials">
          <Link to="" className="social">
            <img src="/images/facebook.svg" alt=""></img>
          </Link>
          <Link to="/" className="social">
            <img src="/images/vk.svg" alt=""></img>
          </Link>
          <Link to="/" className="social">
            <img src="/images/github.svg" alt=""></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
