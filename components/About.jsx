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
          <span className="px-4 py-10 leading-relaxed tracking-wide md:w-2/3 md:text-xl md:leading-relaxed">
            I&apos;m an 12th-grade student based in Bangladesh, specializing in <b>TypeScript</b>, <b>React</b>, <b>Next.js</b>, and <b><i>Python</i></b>.
            <br />
            <span className="mt-5 block text-sm md:text-base">
              <Balancer>
                Although I&apos;m a full-stack developer, I have a strong preference for backend development over frontend.
                My focus is on building reliable and high-performance software solutions.
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
              className="z-auto h-[200px] w-[200px] overflow-hidden rounded-[2.5em] transition-transform duration-200 hover:scale-105 cursor-pointer select-none"
              priority
            />
            <span className="flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-bold tracking-wider">Nusab Taha</span>
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
