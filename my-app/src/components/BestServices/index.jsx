import React from "react";
import "./index.scss";
import SectionTitle from "../SectionTitle";
const BestServices = () => {
  return (
    <>
      <section id="best_services">
        <div className="best_services_container">
          <div className="best_services_content">
            <div className="best_services_content_img">
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png.webp"
                alt=""
              />
            </div>
            <div className="best_services_content_text" >
              <SectionTitle  text="OUR TOP SERVICES" head="Our Best Services" />
              <h4>
                Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess
                cillum dolore egru lofrre dsu quality mollit anim laborumuis au
                dolor in voluptate velit cillu.
              </h4>
              <h5>
                Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re
                voluptate velit esscillumlore eu quife nrulla parihatur.
                Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
                dhjinulpadeserunt moll.
              </h5>
              <button>More About Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestServices;
