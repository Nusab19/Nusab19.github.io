import Image from "next/image";
import Balancer from "react-wrap-balancer";

const About = () => {
  return (
    <div className="bg-[#080609] text-gray-200">
      <div className="mx-auto max-w-screen-lg px-0 pb-40 pt-10">
        <header className="py-10 text-center text-3xl font-bold md:mb-20 md:text-5xl">
          About Me
        </header>
        <div className="flex flex-col-reverse items-center justify-center md:flex-row lg:justify-between">
          <span className="text-balance px-4 py-10 text-lg leading-relaxed tracking-wider md:w-2/3 md:text-xl md:leading-relaxed">
            I&apos;m a{" "}
            <span className="font-semibold italic text-primary-foreground/90 underline underline-offset-2">
              full-stack developer
            </span>{" "}
            based in Bangladesh, specializing in <b>TypeScript</b>, <b>React</b>
            , <b>Next.js</b>, and{" "}
            <b>
              <i>Python</i>
            </b>
            .
            <br />
            <span className="mt-5 block text-sm tracking-wider text-gray-300 md:text-base">
              <Balancer>
                Although I&apos;m a full-stack developer, I have a strong
                preference for backend development over frontend. My focus is on
                building reliable and high-performance software solutions.
              </Balancer>
              <span className="mt-3 block font-mono opacity-50">
                CSS is kinda tough tho! -.-
              </span>
            </span>
          </span>
          <span className="relative flex flex-col items-center justify-center gap-5">
            <Image
              src="/images/nightRawCP.jpg"
              alt="Nusab Taha"
              width={200}
              height={200}
              className="z-auto h-[200px] w-[200px] cursor-pointer select-none overflow-hidden rounded-[2.5em] transition-transform duration-200 hover:scale-105"
              priority
              title="Yes, this is a real photo. No edits, nothing. Just a long exposure :>"
            />
            <span className="flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-bold tracking-wider">
                Nusab Taha
              </span>
              <span className="text-sm font-semibold tracking-tighter text-gray-300 text-opacity-80">
                Full-Stack Developer
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
