import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://nusab19.pages.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content={metadata.title} />
        <meta
          name="google-site-verification"
          content="WPPXho-ehsTzL41OYAECiVP8ilWMxfxjHtHwQUsu1FU"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

const title = "Nusab Taha - Full Stack Developer";
const description =
  "I'm Nusab Taha, a full-stack software engineer from Bangladesh who's building the web with React, Next.js, and Tailwind.";
const keywords =
  "nusab, nusab taha, nusab19, contest hive, toph leaderboard, nusab taha portfolio, al quran bot telegram";
const url = "https://nusab19.pages.dev/";

export const metadata = {
  metadataBase: new URL("https://nusab19.pages.dev/"),
  title: title,
  description: description,
  keywords: keywords,
};
