import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";
import Services from "../components/Service";
import Skills from "../components/Skills";



const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Services/>

      <Education />

      

      <Projects />

      <Contact />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Home;