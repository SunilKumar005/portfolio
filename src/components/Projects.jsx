import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const Projects = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Projects</h1>
      {[...Array(4)].map((_, index) => (
        <Project index={index} />
      ))}
    </div>
  );
};
const Project = ({ index, title, description }) => {
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px', 
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } }, 
  };
  const projects = [
    {
      name: "Employee Records Management System",
      description: "The ERMS is a handy Records Manager using tkinter in Python for Graphical User Interface and SQLite for Database Management . It is Built to Perform all the CRUB Operations in the Records while being offline.",
      technologies: "Python,Tkinter,SQLite",
      link: "https://github.com/SunilKumar005/ERMS"
    },
    {
      name: "Anime Recommendation System",
      description: "A KNN Model is trained with Anime dataset and provides recommendations by Content-based Recommendation.A flask app is built for deployment of the model with a web page featuring the display of animes and its recommendations",
      technologies: "Tensorflow, Flask, HTML, CSS,Python",
      link: "https://github.com/SunilKumar005/AnimeRec"
    },
    {
      name: "Food Review Summarizer",
      description: "The Project is built by Fine-tuning a text-to-text generation model 't5-small' by fitting Amazon Fine Food Reviews . The Fine-tuned model is then used to summarize multiple reviews given for multiple food items from a Kitchen.The fine-tuned model is then deployed using Flask to get reviews to Summarize.",
      technologies: "Flask,Tensorflow,HTML,Python",
      link: "https://github.com/SunilKumar005/FoodSummarizer"
    },
    {
      name: "Anime Image Generator",
      description: "This Project uses Variational Auto-Encoder (VAE) architecture to generate anime images .The Model is fitted with a dataset of anime images and trained model is used to Generate Images",
      technologies: "TensorFlow, Python",
      link: "https://github.com/SunilKumar005/AnimeGen"
    }
  ];
  function Image({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 200);

    return (
      <section>
        <div ref={ref}></div>
        <motion.h2 style={{ y }}>
          <motion.img src={require(`./images/project${id + 1}.jpg`)} alt={`Project ${id + 1}`} style={styles.image} />
        </motion.h2>
      </section>
    );
  }
  return (
    <motion.div ref={ref} style={{ ...styles.achievement, ...(inView ? styles.visible : styles.hidden) }} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
    <div key={index} style={{ ...styles.project, ...getProjectStyle(index) }}>
          <div style={styles.projectContent}>
            <Image id={index} />
            <div style={styles.details}>
              <h3 style={ styles.title}>{projects[index].name}</h3>
              <p style={styles.text}>{projects[index].description}</p>
              <p style={styles.text}>Technologies Used: {projects[index].technologies}</p>
              <a href={projects[index].link} style={styles.link}>View Project</a>
            </div>
          
          </div>
        </div>
    </motion.div>
  );
};
const getProjectStyle = index => {
  const isEven = index % 2 === 0;
  return {
    flexDirection: isEven ? 'row' : 'row-reverse',
  };
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden', 
  },
  title: {
    textAlign: 'center',
    textDecoration: 'bold',
    fontSize: '30px',
    color: '#fff',
    fontFamily: "Trebuchet MS, Helvetica, sans-serif",
  },
  project: {
    width: '100vw', 
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectContent: {
    display: 'flex',
    alignItems: 'center',
    width: '80%', 
    maxWidth: '800px', 
  },
  image: {
    width: 'auto',
    height: '400px',
    margin: '0 20px',
  },
  details: {
    textAlign: 'center',
    flex: '1',
    marginTop: '-180px',
    lineHeight: '1.3',
  },
  text:{
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
  link: {
    marginTop: 'auto',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'white',
    fontFamily: "Trebuchet MS, Helvetica, sans-serif",
  }
};

if (window.matchMedia("(max-width: 768px)").matches) {
  styles.project = {
    flexDirection: 'column', 
    marginBottom: '40px',
  };
}

export default Projects;
