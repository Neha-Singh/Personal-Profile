import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsStrip from "./components/SkillsStrip";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillsStrip />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
