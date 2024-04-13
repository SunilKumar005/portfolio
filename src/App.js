import { motion,useScroll,useSpring} from "framer-motion";
import Header from './components/Header';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MyWorks from "./components/MyWorks";
import Achievements from "./components/Achievements";
import Slides from "./components/Slides";
import ContactMe from "./components/Contact";
import "./components/css/styles.css";


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
     <motion.div
        className="progress-bar"
        style={{ scaleX}}
      />
      <Header name="SUNIL KUMAR S" />
      <Slides />
      <About />
      <Skills />
      <Projects />
      <MyWorks />
      <Achievements />
      <ContactMe />
    </>
  );
}
export default App;
