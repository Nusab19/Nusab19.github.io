import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nusab19.pages.dev/" />
        <meta property="og:image" content="/images/og.png" />
        <meta property="og:image:alt" content={metadata.title} />
      </head>
      <body>{children}</body>
    </html>
  );
}

const title = "Nusab Taha - Portfolio";
const description =
  "Nusab Taha, a full-stack developer from Bangladesh building things with (& for) the open-source project. Building the web with React, Next.js, and Tailwind CSS.";
const keywords =
  "nusab, nusab taha, nusab19, nusab yaha, musab taha, contest hive, toph leaderboard, nusab taha telegram, nusab taha portfolio, pynekobin, al quran bot telegram";
const url = "https://nusab19.pages.dev/";

export const metadata = {
  title: title,
  description: description,
  keywords: keywords,
  // openGraph: {
  //   title: title,
  //   description: description,
  //   url: url,
  //   images: ["https://contest-hive.vercel.app/opengraph-image.png"],
  // },
};
