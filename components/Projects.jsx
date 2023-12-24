import Link from "next/link";
import Image from "next/image";

import icons from "@helpers/icons";

const Projects = () => {
  return (
    <div className="bg-[#010e17] pb-20 text-gray-100">
      <div className="mx-auto min-h-screen max-w-screen-lg px-0">
        <header className="py-10 text-center text-3xl font-bold md:mb-20 md:text-5xl">
          Projects
        </header>

        <div className="grid grid-cols-1 gap-5 px-2 lg:grid-cols-2 lg:px-0">
          {getProjectCard({
            title: "Contest Hive",
            description:
              "A website showing the future contests from 7 different platforms",
            technologies: ["react", "nextjs", "python"],
            link: "https://contest-hive.vercel.app/",
            github: "https://github.com/Contest-Hive/Contest-Hive/",
            isImage: true,
            imageSrc: "/images/contesthive.svg",
          })}

          {getProjectCard({
            title: "Toph Leaderboard",
            description:
              "A website showcasing the users with the most Fastest, Lightest & Shortest code submissions in toph.co",
            technologies: ["react", "nextjs", "python"],
            link: "https://toph.pages.dev/",
            github: "https://github.com/Nusab19/Toph-Leaderborad",
            isImage: true,
            imageSrc: "/images/tophleaderboard.svg",
          })}

          {getProjectCard({
            title: "Al Quran Bot",
            description:
              "A telegram bot with Arabic, English and Audio recitation of each verse of the Holy Quran",
            technologies: ["python", "mongodb"],
            isImage: true,
            imageSrc: "/images/quranBot.jpg",
            link: "https://t.me/AlFurqanRobot",
            github: "https://github.com/The-Quran-Project/TG-Quran-Bot",
          })}

          {getProjectCard({
            title: "pyNekobin",
            description:
              "Python Wrapper for Nekobin API to paste and read text snippets from nekobin.com",
            technologies: ["python"],
            isImage: true,
            imageSrc: "/images/nekobin.jpg",
            link: "https://pypi.org/project/pyNekobin/",
            github: "https://github.com/Nusab19/pyNekobin",
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

/**
 *
 * @title {string}          - Title of the project
 * @description {string}    - Description of the project
 * @technologies {string[]} - Array of technologies used in the project
 * @iconName {string}       - Name of the icon to be used in the project
 * @link {string}           - Link to the website of the project
 * @github {string}         - Link to the GitHub repository of the project
 * @isImage {boolean}       - Whether the image is a svg or not
 * @imageSrc {string}       - Link to the image of the project
 * @returns {JSX.Element}   - Project Card
 */
function getProjectCard({
  title,
  description,
  technologies,
  iconName,
  link,
  github,
  isImage,
  imageSrc,
}) {
  const tools = [];
  for (const tech of technologies) {
    tools.push(
      <span
        key={tech}
        className={`h-[20px] w-[20px] md:h-[27px] md:w-[27px] ${
          tech === "python" ? "mt-0.5" : ""
        }`}
      >
        {icons[tech]}
      </span>,
    );
  }

  const img = isImage ?? "svg";

  return (
    <div className="flex items-center gap-7 rounded-lg bg-[#0b1822] p-5">
      <div className="flex min-w-[60px] flex-col items-center justify-center gap-3 md:min-w-[100px]">
        {img === "svg" ? (
          <span className="h-[60px] w-[60px] md:h-[80px] md:w-[80px]">
            {icons[iconName]}
          </span>
        ) : (
          <Image
            src={imageSrc}
            alt={title}
            width={100}
            height={100}
            className="h-[60px] w-[60px] rounded-md md:h-[70px] md:w-[70px]"
          />
        )}

        <hr className="w-10 rounded-sm border-gray-400" />

        <div className="flex items-center justify-center gap-2">{tools}</div>
      </div>
      <div className="flex h-full flex-col gap-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-400">{description} </p>
        <div className="mt-2 flex items-center gap-6 font-semibold">
          <Link
            href={link ?? "#"}
            target="_blank"
            className="text-sm text-blue-400 opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            Website
          </Link>
          <Link
            href={github ?? "#"}
            target="_blank"
            className="text-sm text-blue-400 opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
