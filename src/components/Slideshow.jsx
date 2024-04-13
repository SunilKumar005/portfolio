import React, { useState, useEffect } from 'react';
import "./css/Slideshow.css"; 
import { motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); 

    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <motion.div ref={ref} style={{ ...styles.achievement, ...(inView ? styles.visible : styles.hidden) }} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          {slide}
        </div>
      ))}
    </div>
    </motion.div>
    
  );
};
const styles = {
  visible: {
    visibility: 'visible',
  },
  hidden: {
    visibility: 'hidden',
  },
};
export default Slideshow;
