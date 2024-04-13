import React from 'react';
import Slideshow from './Slideshow';
import "./css/styles.scss";

const Slides = () => {
  const slides = [
    <div className="slide-content"><h2 class=".sl">Hello , I am SUNIL KUMAR S </h2></div>,
    <div className="slide-content"><h2 class=".sl">Enthusiastic About Learning </h2></div>,
    <div className="slide-content"><h2 class=".sl">Interested in Web and ML </h2></div>,
    <div className="slide-content"><h2 class=".sl">Passionate About Developing </h2></div>,
  ];

  return (
    <div>
      <Slideshow slides={slides} />
    </div>
  );
};

export default Slides;
