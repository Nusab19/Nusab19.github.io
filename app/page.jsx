import Navbar from "@components/Navbar";
import HomePage from "@components/HomePage";
import About from "@components/About";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Contact from "@components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
