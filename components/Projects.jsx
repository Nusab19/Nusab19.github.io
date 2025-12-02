import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import icons from "@helpers/icons";
import { BadgeInfoIcon } from "lucide-react";

const projects = [
  {
    title: "Contest Hive",
    description:
      "A website showing the upcoming contests from 7 different online judges.",
    technologies: ["react", "nextjs", "python"],
    link: "https://contest-hive.vercel.app/",
    github: "https://github.com/Contest-Hive/Contest-Hive/",
    isImage: true,
    imageSrc: "/images/projects/contest-hive.svg",
  },
  {
    title: "Shohid24 - শহীদ২৪",
    description:
      "A website listing the martyrs in the July Student Revolution in Bangladesh.",
    technologies: ["nextjs", "python", "mongodb"],
    link: "https://shohid24.pages.dev/",
    github: "https://github.com/Shohid24/shohid24",
    isImage: true,
    imageSrc: "/images/projects/shohid24.svg",
  },
  {
    title: "Quran API",
    description:
      "A simple API for the Quran with no rate limit. No authentication required.",
    technologies: ["nextjs", "python"],
    link: "https://quranapi.pages.dev/",
    github: "https://github.com/The-Quran-Project/Quran-API",
    isImage: true,
    imageSrc: "/images/projects/quran-api.svg",
  },
  {
    title: "Al Quran Bot",
    description:
      "One of the best Telegram bots for the Quran with translations, audio recitations and more.",
    technologies: ["python", "mongodb"],
    link: "https://t.me/AlFurqanRobot",
    github: "https://github.com/The-Quran-Project/TG-Quran-Bot",
    isImage: true,
    imageSrc: "/images/projects/quran-bot.jpg",
  },
  {
    title: "Toph Leaderboard",
    description: (
      <span className="mt-3 block">
        <span className="absolute -ml-0.5 -mt-5 flex items-center justify-center gap-1 text-xs tracking-wider text-red-400">
          <BadgeInfoIcon size={15} className="mt-0.5" />
          Not maintained anymore
        </span>
        A website showcasing the users with the highest number of Fastest,
        Lightest & Shortest code submissions in{" "}
        <a
          href="https://toph.co"
          target="_blank"
          className="font-semibold italic text-sky-400/90 underline-offset-2 hover:underline"
        >
          toph.co
        </a>
      </span>
    ),
    technologies: ["nextjs", "python"],
    link: "https://toph.pages.dev/",
    github: "https://github.com/Nusab19/Toph-Leaderboard",
    isImage: true,
    imageSrc: "/images/projects/toph.svg",
  },
  // {
  //   title: "pyNekobin",
  //   description:
  //     "Python Wrapper for Nekobin API to paste and read text snippets from nekobin.com",
  //   technologies: ["python"],
  //   link: "https://nekobin.com/",
  //   github: "https://github.com/Nusab19/pyNekobin",
  //   isImage: true,
  //   imageSrc: "/images/projects/nekobin.jpg",
  // },
];

const Projects = () => {
  return (
    <div className="bg-[#0b0b10] text-gray-100 md:pb-20">
      <div className="mx-auto max-w-screen-lg px-0 pb-40 pt-10">
        <header className="mb-10 pt-10 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">Projects</h2>
          <p className="mx-auto max-w-2xl text-balance text-sm tracking-wide text-gray-400 md:text-base">
            Some of the things that I <b className="italic">think</b> I can
            showcase.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 px-2 lg:grid-cols-2 lg:px-0">
          {projects.map((project, index) => {
            const isLastOdd =
              projects.length % 2 === 1 && index === projects.length - 1;

            return (
              <div
                key={index}
                className={isLastOdd ? "lg:col-span-2 flex justify-center" : ""}
              >
                <div className={isLastOdd ? "max-w-2xl w-full" : ""}>
                  {getProjectCard(project)}
                </div>
              </div>
            );
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
    <div className="flex items-center gap-7 rounded-lg bg-[#131721] p-5">
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
        <p className="text-sm text-gray-400">
          <Balancer>{description}</Balancer>
        </p>
        <div className="mt-2 flex items-center gap-6 font-semibold">
          <Link
            href={link ?? "#"}
            target="_blank"
            className="transition-color rounded-md bg-[#eaeaea] px-2 py-1 text-sm  text-gray-800 duration-100 hover:bg-gray-700/50 hover:text-[#eaeaea]"
          >
            Website
          </Link>
          <Link
            href={github ?? "#"}
            target="_blank"
            className="hover:bg- transition-color rounded-md bg-gray-700/50 px-2 py-1 text-sm text-[#eaeaea] duration-100 hover:bg-gray-700/30"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
