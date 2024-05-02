import styles from './App.module.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Exeperience';
import Contact from   './components/Contact';
import Project from './components/Project';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );

}

export default App
