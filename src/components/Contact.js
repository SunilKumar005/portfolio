import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa';
import { motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const ContactMe = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
    
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } },
    };
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    contactInfo: {
      display: 'flex',
      marginBottom: '20px',
    },
    contactItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0px 60px',
      color: 'white',
    },
    icon: {
      borderRadius: '50%',
      height: '30px',
      width: '30px',
      padding: '10px',
      fontSize: '24px',
      backgroundColor: '#0EE4E4',
      color: '#000',
      boxShadow: '1px 1px 20px rgba(38,198,218 ,1)'
    },
    contactText: {
      marginTop: '10px',
      textAlign: 'center',
    },
    socialIcons: {
      display: 'flex',
      marginTop:'50px',
      textAlign: 'center',
    },
    socialIcon: {
      borderRadius: '50%',
      fontSize: '39px',
      height: '40px',
      width: '40px',
      padding: '10px',
      margin: '40px 30px',
      backgroundColor: '#0EE4E4',
      color: 'black',
      boxShadow: '1px 1px 30px rgba(38,198,218 ,1)',
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
    },
    visible: {
        visibility: 'visible',
    },
    hidden: {
        visibility: 'hidden',
    },
  };

  return (
    <motion.div ref={ref} style={{ ...styles.achievement, ...(inView ? styles.visible : styles.hidden) }} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      
    
    <div style={styles.container}>
        <h1>Contact Me</h1>
      <div style={styles.contactInfo}>
        <div style={styles.contactItem}>
          <div style={styles.icon}>
            <FaPhone style={{fontSize:'29px'}}/>
          </div>
          <div style={styles.contactText}>
            <h2 style={styles.head}>Call Me</h2>
            <p style={styles.para}>+91 8300815542</p>
            
          </div>
        </div>
        <div style={styles.contactItem}>
          <div style={styles.icon}>
            <FaEnvelope style={{fontSize:'30px'}}/>
          </div>
          <div style={styles.contactText}>
            <h2 style={styles.head}>Email Me</h2>
            <p style={styles.para}>sunilkmar005@gmail.com</p>
          </div>
        </div>
      </div>
      <div style={styles.socialIcons}>
        <a href="https://wa.me/+918300815542"style={styles.socialIcon}>
          <FaWhatsapp />
        </a>
        <a href="https://t.me/+918300815542" style={styles.socialIcon}>
          <FaTelegram />
        </a>
        <a href="https://www.instagram.com/sunilkumar.005?igsh=MWVycmhmeTVnMTk0ZQ==" style={styles.socialIcon}>
          <FaInstagram />
        </a>
      </div>
    </div>
    </motion.div>
  );
};

export default ContactMe;
