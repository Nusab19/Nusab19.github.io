import { Merienda } from "next/font/google";
import "@components/styles/homepage.css";

const merienda = Merienda({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <div className={`${merienda.className} bg-[#072029] text-gray-100`}>
      <div className="container mx-auto">
        <div className="flex min-h-screen flex-row items-center justify-center">
          <h1 className="magic-text text-4xl font-bold md:text-6xl">
            Hi, I&apos;m Nusab
          </h1>
          <span className="ml-3 mt-3 h-4 w-4 rounded-full bg-[#00bbd4] md:mt-7 md:h-5 md:w-5"></span>
        </div>
      </div>
      {/* <span className="md:h-5 md:w-5 w-4 h-4 moving-circles1"></span> */}
    </div>
  );
};

export default HomePage;
