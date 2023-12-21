import React from "react";
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <div className={`${merienda.className} bg-[#072029] text-gray-100`}>
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-center min-h-screen">
          <h1 className="md:text-6xl text-4xl font-bold">Hi, I&apos;m Nusab</h1>
          <span className="md:h-5 md:w-5 w-4 h-4 bg-[#00bbd4] rounded-full ml-3 md:mt-7 mt-3"></span>
        </div>
      </div>
      {/* <span className="md:h-5 md:w-5 w-4 h-4 moving-circles1"></span> */}
    </div>
  );
};

export default HomePage;
