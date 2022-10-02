import React from "react";
import "./Slider.css";

// Debo Arreglar los slider con boton de siguiente o ciclo infinito ya que estos no lo presentan

const slidesInfo = [
  {
    src: "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt: "Coming Soon",
    desc: "Coming Soon",
  },

  
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
