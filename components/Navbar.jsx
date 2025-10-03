"use client";
import { useState, useEffect } from "react";

import Link from "next/link";

import icons from "@helpers/icons";
import "@components/styles/nav.css";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    // Hide/Show Navbar on scroll
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, setPrevScrollPos, setVisible]);

  return (
    <nav
      className={`animation-all fixed z-50 flex h-16 w-full items-center gap-3 bg-[#f3f4f6] text-gray-900 duration-300 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <span className="circle1 ml-5 h-4 w-4 rounded-full bg-[#00d49f] md:h-5 md:w-5"></span>
      <Link href="/" title="Homepage Logo">
        {icons.logo}
      </Link>
      <span className="circle2 h-4 w-4 rounded-full bg-[#00bbd4] md:h-5 md:w-5"></span>
      <Link
        href="https://blog19.pages.dev"
        target="_blank"
        title="My blog page"
        className="ml-auto mr-5 block rounded-md bg-[#072029] px-2 pb-1.5 pt-1 font-semibold underline-offset-4 transition-all duration-150 hover:bg-[#072029]/95 text-white hover:underline"
      >
        Blog
      </Link>
    </nav>
  );
};

export default Navbar;
