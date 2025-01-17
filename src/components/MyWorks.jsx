import React,{useRef} from 'react';
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import "./css/styles.scss";

const MyWorks = () => {
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);
  const [refr, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px', 
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } }, 
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Works</h1>
      <motion.div ref={refr} style={{ ...styles.achievement, ...(inView ? styles.visible : styles.hidden) }} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      <div style={styles.worksContainer}>
        <div style={{ ...styles.work, ...getWorkStyle() }}>
        <section>
        <div ref={ref}></div>
        <motion.h2 style={{ y }}>
          <motion.img src={require('./images/technical_head.jpg')} alt="Technical Head" style={styles.image} />
        </motion.h2>
      </section>
          <div style={styles.details}>
            <h3 style={styles.post}>Technical Head of IT</h3>
            <p></p>
          </div>
        </div>
        <div style={{ ...styles.work, ...getWorkStyle() }}>
        <section>
        <div ref={ref}></div>
        <motion.h2 style={{ y }}><motion.img src={require('./images/web_lead.jpg')} alt="Web Lead" style={styles.image} /></motion.h2>
      </section>
          <div style={styles.details}>
            <h3 style={styles.post}>Web Lead of Coding Club of GCT</h3>
            <p></p>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

const getWorkStyle = () => {
  return {
    flex: '1',
    marginRight: '20px',
  };
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:'100vh',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'monospace',
  },
  worksContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  work: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '200px',
    height: 'auto',
    marginTop: '50px',
    marginBottom: '-30px',
  },
  visible: {
    visibility: 'visible',
  },
  hidden: {
    visibility: 'hidden',
  },
  details: {
    textAlign: 'center',
  },
  post:{
    fontSize:'20px',
    fontWeight:'bold',
    color: 'white',
    fontFamily: "Trebuchet MS, Helvetica, sans-serif",
  },


};

if (window.matchMedia("(max-width: 768px)").matches) {
  styles.container = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    margin: '0 auto',
  };
  styles.worksContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
}

export default MyWorks;
