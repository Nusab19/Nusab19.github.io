import Image from "next/image";

import Navbar from "@components/Navbar";
import HomePage from "@components/HomePage";
import About from "@components/About";
import Script from "next/script";

import Blob from "@components/Blob";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      {/* <About /> */}
      <Blob />
    </main>
  );
}
