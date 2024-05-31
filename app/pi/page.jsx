import Head from "next/head";

export const metadata = {
  title: "100 digits of π",
};

const PI = () => {
  return (
    <div className="mx-4">
      <h1 className="my-5 text-3xl font-bold underline underline-offset-8 md:my-10 md:text-5xl">
        100 digits of π
      </h1>
      <p className="mx-1 font-mono text-lg font-semibold md:text-xl">
        3.14159 2653589 7932384626 4338 3279502 8841971 6939937 5105820 9749445
        9230781 6406286 2089986 2803482 5342117 0679
      </p>
      <div className="my-20">
        <h2 className="my-2 text-2xl font-bold underline underline-offset-8 md:text-4xl">
          Why?
        </h2>
        <p className="ml-2 font-semibold md:text-lg">
          I like numbers. For a time, I have been memorizing the digits of{" "}
          <span className="font-bold">π</span> for a while. I know this is entirely unnecessary.
          <br />
          <span className="font-bold">However</span>, I simply find pleasure in doing so. So, please
          don&apos;t mind my <span className="font-bold">peculiar</span> hobby. :3
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
