import Image from "next/image";

import Navbar from "@components/Navbar";
import HomePage from "@components/HomePage";
import About from "@components/About";
import Skills from "@components/Skills";
import Projects from "@components/Projects";


export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
