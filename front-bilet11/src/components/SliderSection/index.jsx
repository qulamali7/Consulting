import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import Slider from "react-slick";
function SliderSection() {
  const settings = {
    // fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="slider_container">
        <Slider {...settings}>
          <div className="slide_item">
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/hero/h1_hero.jpg.webp" />
            <div className="slide_text">
              <h2>We help to grow your Business</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ea!</p>
              <button>OUR SERVICES</button>
            </div>
          </div>
          <div className="slide_item">
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/hero/h1_hero.jpg.webp" />
            <div className="slide_text">
              <h2>We help to grow your Business</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ea!</p>
              <button>OUR SERVICES</button>
            </div>
          </div>
          <div className="slide_item">
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/hero/h1_hero.jpg.webp" />
            <div className="slide_text">
              <h2>We help to grow your Business</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ea!</p>
              <button>OUR SERVICES</button>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SliderSection;
