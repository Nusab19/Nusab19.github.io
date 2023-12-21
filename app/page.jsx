import Image from "next/image";

import Navbar from "@components/Navbar";
import HomePage from "@components/HomePage";
import About from "@components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <About />
    </main>
  );
}
