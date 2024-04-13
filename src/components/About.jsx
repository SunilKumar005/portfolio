import React,{useRef,} from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  motion,
  useScroll,
  useTransform,
  MotionValue
} from "framer-motion";
import photoUrl from './images/profile.jpg';
import { useInView } from 'react-intersection-observer';
const About = () => {
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  };
  
  function Image({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 150);
  
    return (
      <section>
        <div ref={ref}>
        </div>
        <motion.h2 style={{ y }}><img src={photoUrl}  alt="Profile" style={ styles.photo } /></motion.h2>
      </section>
    );
  }
  return (
    <motion.div ref={ref} style={{ ...styles.achievement, ...(inView ? styles.visible : styles.hidden) }} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      <div style={styles.container}>
        <div style={styles.content}>

          <div style={styles.left}>
            <div style={styles.photoContainer}>
              <Image id={1} />
            </div>
          </div>
          <div style={styles.right}>
            <h2 style={styles.hi}>Hi , I am <h2 style={styles.gradientText}>Sunil Kumar S</h2></h2>
            <p style={styles.text}>
            Passionate about leveraging technology to solve complex problems, I am a dedicated IT student at Government College of Technology with a keen interest in full stack development, penetration testing, and machine learning. With a strong foundation in IT fundamentals and a drive to continuously learn and grow, I am committed to contributing innovative solutions to the ever-evolving tech landscape. Through hands-on projects and continuous exploration of emerging technologies, I aim to make a meaningful impact in the field of IT. Let's connect and explore opportunities to collaborate and create together.
            </p>
            <div style={styles.socialIcons}>
              <a href="https://www.instagram.com/sunilkumar.005?igsh=MWVycmhmeTVnMTk0ZQ==" style={styles.icon}><FaInstagram /></a>
              <a href="https://github.com/SunilKumar005" style={styles.icon}><FaGithub /></a>
              <a href="https://www.linkedin.com/in/sunil-kumar-s-70a16a1b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={styles.icon}><FaLinkedin /></a>
            </div>
          </div>
        </div>
    </div>
    </motion.div>
    
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  content: {
    maxWidth: '800px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: '#111',
  },
  left: {
    textAlign: 'center',
    marginRight: '20px', 
    flexBasis: '150px', 
    flexShrink: 0,
  },
  right: {
    textAlign: 'left',
    flex: '1', 
    padding: '0 20px',
    color: 'white',
  },
  photoContainer: {
    marginBottom: '20px', 
  },
  photo: {
    width: '276px',
    height: '612px', 
    display: 'block',
    margin: '0 auto', 
  },
  socialIcons: {
    marginTop: '30px',
    textAlign: 'center',
    backgroundColor: '-webkit-linear-gradient(#f9ce34, #ee2a7b,#6228d7)',
  },
  icon: {
    borderRadius: '15%',
    fontSize: '35px',
    height: '30px',
    width: '35px',
    paddingTop : '5px',
    padding: '10px 5px 0px 5px', 
    margin: '40px 30px',
    backgroundColor: '#6228d7',
    color: 'black',
    boxShadow: '1px 1px 30px #6228d7',
  },
  visible: {
    visibility: 'visible',
  },
  hidden: {
    visibility: 'hidden',
  },
  gradientText: {
    fontSize: '48px',
    fontWeight: 'bold',
    fontFamily: "Anonymous Pro, monospace",
    background: '-webkit-linear-gradient(45deg, #553c9a, #ee4b2b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  text:{
    fontSize: '18px',
    lineHeight: '1.3',
    fontFamily: "Trebuchet MS, Helvetica, sans-serif",
  },
  hi:{
    fontSize:'28px',
    fontWeight:'bold',
    fontFamily: "Trebuchet MS, Helvetica, sans-serif",
  }
  
  
};

if (window.matchMedia("(max-width: 768px)").matches) {
  styles.content.flexDirection = 'column'; 
  styles.left = {
    textAlign: 'center', 
    marginRight: '0', 
  };
}

export default About;

