import { ABeeZee } from "next/font/google";

const aBeeZee = ABeeZee({ subsets: ["latin"], weight: ["400"] });

const About = () => {
  return (
    <div className={`${aBeeZee.style} bg-[#080609] text-gray-200`}>
      <div className="container mx-auto min-h-screen">
        <header className="md:text-5xl text-center py-10 text-3xl">
          About Me
        </header>
        <div className="flex flex-row items-center justify-center"></div>
      </div>
    </div>
  );
};

export default About;
