import React from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import "./css/styles.scss";


const Achievements = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Achievements</h1>
      <Achievement imgSrc="1" title="Winner of Page Perfect" description="Winner of the Event 'Page Perfect' at Intellect'22 Conducted By Y's Service Club of GCT" />
      <Achievement imgSrc="2" title="Runner of Cookr Hackathon'24" description="Placed Runner at the 'FUTURE OF FOOD TECH' Hackathon conducted by Cookr and Coding Club of GCT" />
      <Achievement imgSrc="3" title="Winner of Web Marvel" description="Winner of the Event 'WebMarvel' at BLAZE'24 Conducted by the Department of EIE,GCT" />
    </div>
  );
};

const Achievement = ({ imgSrc, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    rootMargin: '-100px 0px', 
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeInOut" } }, 
  };

  return (
    <motion.div ref={ref} style={{ ...styles.achievement, ...(inView ? styles.visible : styles.hidden) }} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      <motion.img
        src={require(`./images/achievement${imgSrc}.jpg`)}
        alt={title}
        style={styles.image}
      />
      <motion.div style={styles.details}>
        <motion.h3 style={styles.head} >{title}</motion.h3>
        <motion.p style={styles.para}>{description}</motion.p>
      </motion.div>
    </motion.div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black', 
    color: 'white',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  achievement: {
    width: '100%',
    height: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
  },
  hidden: {
    visibility: 'hidden',
  },
  image: {
    width: '500px',
    height: 'auto',
    marginBottom: '20px',
  },
  details: {
    textAlign: 'center',
  },
  head:{
    textAlign: 'center',
    textDecoration: 'bold',
    fontSize: '30px',
    color: '#fff',
    fontFamily: "Trebuchet MS, Helvetica, sans-serif",
  },
  para:{
    fontFamily: 'monospace',
    color: 'white',
    fontSize: '17px',
  }
};

export default Achievements;
