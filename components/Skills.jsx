"use client";

import icons from "@helpers/icons";

const skills = [
  {
    name: "Python",
    icon: "python",
    color: "#3776AB",
    comment: "I can't live without it",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    color: "#FFFFFF",
    comment: "Well, it's not *bad*",
  },
  {
    name: "React",
    icon: "react",
    color: "#61DAFB",
    comment: "Ridiculously large bundle size -.-",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    color: "#38B2AC",
    comment: (
      <span className="tracking-wider">
        Useful
        <span
          className="text-3xl leading-[0px] text-blue-600/70"
          title="The tiny dot!"
        >
          .
        </span>
      </span>
    ),
  },
  {
    name: "Node.js",
    icon: "nodeJS",
    color: "#339933",
  },
  {
    name: "Typescript",
    icon: "typescript",
    color: "#3178C6",
    comment: (
      <>
        Types? <code className="font-bold italic">any</code>
      </>
    ),
  },
  {
    name: "Git",
    icon: "git",
    color: "#F05032",
    comment: "Merge conflicts :[",
  },
  {
    name: "FastAPI",
    icon: "fastAPI",
    color: "#009688",
    comment: "In Python, it is the best",
  },
  {
    name: "Figma",
    icon: "figma",
    color: "#F24E1E",
  },
  {
    name: "MDX",
    icon: "mdx",
    color: "#FCB32C",
    comment: "Sometimes I write blogs, so :3",
  },
  {
    name: "SQLite",
    icon: "sqlite",
    color: "#005780",
    comment: "Way faster than MongoDB",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    color: "#47A248",
  },
];

const Skills = () => {
  return (
    <div className="bg-[#131319] pb-20 text-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 pb-10 pt-10 md:px-8 md:pb-40">
        <header className="mb-10 pt-10 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            What do I use<span className="ml-0.5">?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-sm tracking-wide text-gray-400 md:text-base">
            Well, I do use a <b className="italic">lot</b> of things. But to
            narrow it down, these are the ones (that I can remember now).
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex cursor-pointer select-none items-center gap-4 rounded-xl border-2 border-[#2e2e36] p-4 transition-all duration-200 ease-in-out"
              style={{
                backgroundColor: `${skill.color}10`,
              }}
            >
              <style jsx>{`
                .group:hover {
                  border-color: ${skill.color}80;
                  box-shadow: 0 0 13px -3px ${skill.color}50;
                }
              `}</style>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg p-2 md:h-12 md:w-12">
                <span className="h-full w-full object-contain">
                  {icons[skill.icon]}
                </span>
              </div>
              <div className="flex flex-col tracking-wide">
                <span className="text-sm font-bold text-gray-200 md:text-base">
                  {skill.name}
                </span>
                {skill.comment && (
                  <span className="text-xs text-gray-400">{skill.comment}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
