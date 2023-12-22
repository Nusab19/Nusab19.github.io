import "./globals.css";

export const metadata = {
  title: "Nusab Taha",
  description:
    "Nusab Taha, a full-stack developer from Bangladesh building things with (& for) the open-source project. Building the web with React, Next.js, and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
