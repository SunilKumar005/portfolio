import React from 'react';
import { FaJava, FaPython, FaCode, FaTerminal, FaDatabase, FaCodeBranch, FaRobot, FaLaptopCode, FaShieldAlt } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import "./css/styles.scss";


const Skills = () => {
  const { ref, inView } = useInView({
      triggerOnce: false,

  });

  const variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  };
  return (
    <motion.div ref={ref} style={{ ...styles.achievement, ...(inView ? styles.visible : styles.hidden) }} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
    <div style={styles.container}>
      <h1>My Skills</h1>
      <div style={styles.grid}>
        <div style={styles.skill}>
          <FaLaptopCode style={styles.logo} />
          <p style={styles.text}>FullStack Development</p>
        </div>
        <div style={styles.skill}>
          <FaShieldAlt style={styles.logo} />
          <p style={styles.text}>Penetration Testing</p>
        </div>
        <div style={styles.skill}>
          <FaDatabase style={styles.logo} />
          <p style={styles.text}>Data Science</p>
        </div>
        <div style={styles.skill}>
          <FaRobot style={styles.logo} />
          <p style={styles.text}>Machine Learning</p>
        </div>
        <div style={styles.skill}>
          <FaJava style={styles.logo} />
          <p style={styles.text}>Java</p>
        </div>
        <div style={styles.skill}>
          <FaPython style={styles.logo} />
          <p style={styles.text}>Python</p>
        </div>
        <div style={styles.skill}>
          <FaCode style={styles.logo} />
          <p style={styles.text}>C</p>
        </div>
        <div style={styles.skill}>
          <SiCplusplus style={styles.logo} />
          <p style={styles.text}>C++</p>
        </div>
        <div style={styles.skill}>
          <FaTerminal style={styles.logo} />
          <p style={styles.text}>Bash Scripting</p>
        </div>
        <div style={styles.skill}>
          <FaCodeBranch style={styles.logo} />
          <p style={styles.text}>Git</p>
        </div>
        
      </div>
    </div>
    </motion.div>
  );
};


const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    height: '100vh',
    backgroundColor: 'black', 
  },
  title: {
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '20px',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
    backgroundColor: ' #C0C0C0',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    
    fontWeight: 'bold',

  },
  skill: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    border: 'none',
    
  },
  logo: {
    fontSize: '3em',
    marginBottom: '10px',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: '#0EE4E4',
    textShadow: '0 0 5px #ff8a00, 0 0 10px #e52e71, 0 0 15px #005cba',
  },
  text: {
    color: '#0EE4E4', 
    textDecoration: 'bold',
    fontSize: '20px',
    fontFamily: "Trebuchet MS, Helvetica, sans-serif",
    fontWeight: 'bold',
  },
  visible: {
      visibility: 'visible',
  },
  hidden: {
      visibility: 'hidden',
  },
};

export default Skills;
