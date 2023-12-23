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
      <Link href="/">{icons.logo}</Link>
      <span className="circle2 h-4 w-4 rounded-full bg-[#00bbd4] md:h-5 md:w-5"></span>

      <button className="absolute right-7">{icons.burgerMenu}</button>
    </nav>
  );
};

export default Navbar;
