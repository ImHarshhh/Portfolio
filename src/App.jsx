import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonial"; // Note: Testimonials was commented out in your original App.jsx
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section - typically acts as 'Home' */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Testimonials Section (if you decide to include it in the Navbar) */}
      {/* If you uncomment Testimonials in your Navbar, uncomment this section as well */}
      {/* <section id="testimonials">
        <Testimonials />
      </section> */}

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;