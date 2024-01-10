import React from "react";
import "./index.scss";
import SectionTitle from "../SectionTitle";
import ServicesCards from "../ServicesCards";
const Services = () => {
  return (
    <>
      <section id="services">
        <div className="services_container">
          <div className="services_content">
            <SectionTitle text="OUR TOP SERVICES" head="Our Best Services" />
            <ServicesCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
