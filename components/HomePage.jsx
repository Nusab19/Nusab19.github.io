import { Merienda } from "next/font/google";
import "@components/styles/homepage.css";

const merienda = Merienda({ subsets: ["latin"] });

const blob = (
  <svg
    viewBox="0 0 120 113"
    fill="currentColor"
    className="h-[56.5px] w-[60px] md:h-[113px] md:w-[120px]"
  >
    <path d="M25.0883 29.4062C32.487 -9.03847 87.513 -9.03847 94.9117 29.4062C96.4193 37.2404 100.518 44.3398 106.549 49.5625C136.144 75.1923 108.631 122.846 71.6372 110.031C64.0988 107.42 55.9012 107.42 48.3628 110.031C11.3693 122.846 -16.1436 75.1923 13.4511 49.5625C19.4819 44.3398 23.5807 37.2404 25.0883 29.4062Z" />
  </svg>
);

const HomePage = () => {
  return (
    <div
      className={`${merienda.className} relative bg-[#072029] text-gray-100 overflow-hidden`}
    >
      <div className="container mx-auto">
        <div className="flex min-h-screen flex-row items-center justify-center">
          <h1 className="magic-text text-4xl font-bold md:text-6xl">
            Hi, I&apos;m Nusab
          </h1>
          <span className="ml-3 mt-3 h-4 w-4 rounded-full bg-[#00bbd4] md:mt-7 md:h-5 md:w-5"></span>
        </div>
      </div>

      <span className="absolute top-[20vh] -translate-x-1/2 text-[#00d49f]">
        {blob}
      </span>
      <span className="absolute bottom-[23vh] left-[13vw] text-[#dad7cd]">
        {blob}
      </span>
      <span className="absolute bottom-[10vh] right-[20vw] text-[#f35f5f]">
        {blob}
      </span>
      <span className="absolute right-[30vw] top-[15vh] text-[#219ebc]">
        {blob}
      </span>
      <span className="absolute right-0 top-[40vh] translate-x-1/2 text-[#8d99ae]">
        {blob}
      </span>
    </div>
  );
};

export default HomePage;
