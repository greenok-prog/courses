import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_inner container d-flex justify-content-between">
        <h5>By Grenook</h5>
        <div className="socials">
          <Link to="" className="social">
            <img src="./facebook.svg" alt=""></img>
          </Link>
          <Link to="/" className="social">
            <img src=".//vk.svg" alt=""></img>
          </Link>
          <Link to="/" className="social">
            <img src="./github.svg" alt=""></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
