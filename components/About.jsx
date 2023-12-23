"use client";

import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#080609] text-gray-200">
      <div className="mx-auto min-h-screen max-w-screen-lg px-0">
        <header className="py-10 text-center text-3xl font-bold md:mb-20 md:text-5xl">
          About Me
        </header>
        <div className="flex flex-col-reverse items-center justify-center md:flex-row lg:justify-between">
          <span className="px-4 py-10 leading-relaxed tracking-wide md:w-2/3 md:text-xl md:leading-relaxed">
            I’m a 11th grade student from Bangladesh who loves to make
            interesting stuff using code and to develop the Open Source
            Community.
            <span className="mt-5 block text-sm md:text-base">
              Even though I&apos;m a Full Stack Developer, I&apos;m more into
              Back End Development and Problem Solving.
              <span className="mt-3 block font-mono opacity-50">
                CSS is tough! -.-
              </span>
            </span>
          </span>
          <span className="relative flex flex-col items-center justify-center gap-5">
            <Image // This is a hacky way to blur the image on load
              src="/images/nightRawCP.jpg"
              alt="Nusab Taha's Profile Picture"
              width={1}
              height={1}
              className="absolute inset-0 right-0 h-[200px] w-[200px] rounded-[2.5em] blur-[5px] transition-opacity duration-500"
            />
            <Image
              src="/images/nightRawCP.jpg"
              alt="Nusab Taha's Profile Picture"
              width={100}
              height={100}
              className="z-auto h-[200px] w-[200px] overflow-hidden rounded-[2.5em] opacity-0 transition-all duration-300 hover:scale-110"
              onLoad={(e) => {
                e.target.classList.add("opacity-100");
                e.target.previousSibling.classList.add("opacity-0");
                setTimeout(() => {
                  e.target.previousSibling.classList.add("hidden");
                }, 300);
              }}
            />
            <span className="flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">Nusab Taha</span>
              <span className="text-sm font-semibold text-gray-300">
                Full Stack Developer
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
