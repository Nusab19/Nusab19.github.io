"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import icons from "@helpers/icons";

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
      className={`animation-all duration-300 fixed text-gray-900 bg-[#f3f4f6] w-full h-16 flex items-center gap-3 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <span className="md:h-5 md:w-5 w-4 h-4 bg-[#00d49f] rounded-full ml-5 circle1"></span>
      <Link href="/">{icons.logo}</Link>
      <span className="md:h-5 md:w-5 w-4 h-4 bg-[#00bbd4] rounded-full circle2"></span>

      <button className="absolute right-7">{icons.burgerMenu}</button>
    </nav>
  );
};

export default Navbar;
