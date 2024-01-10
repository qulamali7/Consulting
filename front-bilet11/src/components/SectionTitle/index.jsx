import React from "react";
import "./index.scss";
const SectionTitle = ({text,head}) => {
  return (
    <>
      <div className="section_title">
        <div className="section_title_top">
          <div className="line"></div>
          <p className="section_title_text">{text}</p>
        </div>
        <h2 className="section_title_head">{head}</h2>
      </div>
    </>
  );
};

export default SectionTitle;
