import React from "react";
import "./index.scss";
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer_container">
          <div className="copyright">
            <p>
              Copyright ©2024 All rights reserved | This template is made with &#10084;&#65039;
              by <span>Colorlib</span>
            </p>
          </div>
          <div className="footer_icon">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-solid fa-globe"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
