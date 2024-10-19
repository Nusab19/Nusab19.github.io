export const metadata = {
  title: "100 digits of π",
  description: "100 digits of π by Nusab Taha",
  keywords: "π, pi, 100 digits of pi, 100 digits of π, Nusab Taha",
};

const PI = () => {
  return (
    <div className="mx-4 my-5">
      <h1 className="w-fit text-3xl font-semibold md:my-10 md:text-5xl lg:text-7xl my-5">
        100 digits of π
        <span className="md:mt-5 mt-2 block h-1 w-full bg-gray-700"></span>
      </h1>
      <p className="mx-1 font-mono text-lg font-bold md:text-2xl lg:text-4xl">
        <span className="text-emerald-500">
          3.14159 2653589 7932384626 4338
        </span>{" "}
        <span className="text-teal-600">3279502</span>{" "}
        <span className="bg-gradient-to-r from-sky-500 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          8841971 6939937 5105820 9749445 9230781 6406286 2089986 2803482
          5342117 0679
        </span>
      </p>
      <div className="my-20">
        <h2 className="my-2 w-fit text-2xl font-semibold md:text-4xl lg:text-5xl">
          Why?
          <span className="mt-1.5 md:mt-4 block h-0.5 w-full bg-gray-700"></span>
        </h2>
        <p className="ml-2 md:text-lg">
          I like numbers. So, I have been memorizing the digits of{" "}
          <span className="font-bold">π</span> for a while. I know this is
          entirely unnecessary.
          <br />
          <span className="font-bold">However</span>, I simply find pleasure in
          doing so. So, please don&apos;t mind my{" "}
          <span className="font-bold">peculiar</span> hobby. :3
        </p>
        <p className="my-2 ml-3 text-sm font-bold tracking-wider">
          Nusab Taha
          <br />
          <span className="text-xs font-semibold">
            31<sup>st</sup> May, 2024
          </span>
        </p>
      </div>
    </div>
  );
};

export default PI;
