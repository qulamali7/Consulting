import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header id="header">
        <div className="header_area">
          <div className="header_container">
            <div className="header_logo">
              <Link to={"/"}>
                <img
                  src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp"
                  alt=""
                />
              </Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Services</Link>
                </li>
                <li>
                  <Link to={"/add"}>Add</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
