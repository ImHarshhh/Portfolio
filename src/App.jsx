import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects"; 
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Socials from "../components/Socials";

function App() {
  return (
    <>
      <Navbar />


      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="socials">
        <Socials />
      </section>

      <Footer />
    </>
  );
}

export default App;