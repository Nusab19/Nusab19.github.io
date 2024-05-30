import { ABeeZee } from "next/font/google";

import icons from "@helpers/icons";

const aBeeZee = ABeeZee({ subsets: ["latin"], weight: ["400"] });

function getSkillItem(text, iconName) {
  return (
    <div className="flex cursor-pointer select-none flex-col items-center justify-center gap-3 rounded-md bg-[#1e1e25] py-8 transition-transform duration-200 ease-in-out hover:scale-95">
      <span className="h-[60px] w-[60px]">{icons[iconName]}</span>
      {text}
    </div>
  );
}

const Skills = () => {
  return (
    <div className={`${aBeeZee.style} bg-[#131319] pb-20 text-gray-200`}>
      <div className="mx-auto max-w-screen-lg px-2 pb-40 pt-10 md:px-0">
        <header className="mb-10 pt-10 text-center text-3xl font-bold md:mb-20 md:text-5xl">
          Skills
        </header>
        <div className="grid grid-cols-2 gap-5 text-xs font-semibold text-gray-300 md:grid-cols-3 lg:grid-cols-4">
          {getSkillItem("Python", "python")}
          {getSkillItem("Next.js", "nextjs")}
          {getSkillItem("React", "react")}
          {getSkillItem("Tailwind CSS", "tailwind")}
          {getSkillItem("Node.js", "nodeJS")}
          {getSkillItem("JavaScript", "javascript")}
          {getSkillItem("Git", "git")}
          {getSkillItem("FastAPI", "fastAPI")}
          {getSkillItem("Figma", "figma")}
          {getSkillItem("MDX", "mdx")}
          {getSkillItem("C++", "cpp")}
          {getSkillItem("MongoDB", "mongodb")}
        </div>
      </div>
    </div>
  );
};

export default Skills;
