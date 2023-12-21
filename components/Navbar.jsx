import Link from "next/link";
import icons from "@helpers/icons";

const Navbar = () => {
  return (
    <nav className="fixed text-gray-900 bg-[#f3f4f6] w-full h-16 flex items-center gap-3">
      <span className="md:h-5 md:w-5 w-4 h-4 bg-[#00d49f] rounded-full ml-2 circle1"></span>
      <Link href="/">{icons.logo}</Link>
      <span className="md:h-5 md:w-5 w-4 h-4 bg-[#00bbd4] rounded-full circle2"></span>

      <button className="absolute right-2">{icons.burgerMenu}</button>
    </nav>
  );
};

export default Navbar;
