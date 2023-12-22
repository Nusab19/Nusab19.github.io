"use client";

import { ABeeZee } from "next/font/google";

import icons from "@helpers/icons";

const aBeeZee = ABeeZee({ subsets: ["latin"], weight: ["400"] });
const svgClass =
  "flex flex-col items-center justify-center rounded-md bg-[#1e1e25] py-8 text-xs font-semibold text-gray-300 gap-3";

const Skills = () => {
  return (
    <div className={`${aBeeZee.style} bg-[#131319] pb-20 text-gray-200`}>
      <div className="mx-auto min-h-screen max-w-screen-lg px-2 md:px-0">
        <header className="pt-10 text-center text-3xl font-bold md:mb-20 md:text-5xl">
          Skills
        </header>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          <div className={svgClass}>
            {icons.python}
            Python
          </div>
          <div className={svgClass}>
            {icons.nextjs}
            Next.js
          </div>
          <div className={svgClass}>
            {icons.react}
            React
          </div>
          <div className={svgClass}>
            {icons.tailwind}
            Tailwind CSS
          </div>

          <div className={svgClass}>
            {icons.nodeJS}
            Node.js
          </div>
          <div className={svgClass}>
            {icons.javascript}
            JavaScript
          </div>
          <div className={svgClass}>
            {icons.git}
            git
          </div>

          <div className={svgClass}>
            {icons.fastAPI}
            FastAPI
          </div>
          <div className={svgClass}>
            {icons.figma}
            Figma
          </div>
          <div className={svgClass}>
            {icons.mdx}
            MDX
          </div>
          <div className={svgClass}>
            {icons.cpp}
            C++
          </div>
          <div className={svgClass}>
            {icons.mongodb}
            MongoDB
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
