import Image from "next/image";

const socialLinks = [
  {
    title: "Facebook",
    href: "https://fb.me/NusabTaha",
  },
  {
    title: "Telegram",
    href: "https://t.me/Nusab19",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/nusabtaha/",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/Nusab19",
  },
  {
    title: "Discord",
    href: "https://discordid.netlify.app/?id=804035616420397086",
  },
  {
    title: "Github",
    href: "https://github.com/Nusab19",
  },
  {
    title: "Gmail",
    href: "mailto:nusabtaha33@gmail.com?subject=Hello&amp;body=Hi%20Nusab",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#131619]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col md:mb-0">
            <span className="text-2xl font-semibold text-gray-100">
              Nusab Taha
            </span>
            <span className="text-sm font-semibold text-gray-300 md:text-base">
              Full-Stack Developer
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-200">
                Contact Links
              </h2>
              <div className="grid grid-cols-3 items-center justify-center gap-x-4 gap-y-2 md:grid-cols-4">
                {socialLinks.map((item) =>
                  getSocialIcon({
                    title: item.title,
                    href: item.href,
                    iconSrc: `/assets/icons/${item.title.toLowerCase()}.svg`,
                  }),
                )}
              </div>
            </div>

            <div className="select-none opacity-50 md:ml-5">
              <h2 className="mb-6 text-sm font-semibold uppercase  text-gray-200">
                Others
              </h2>
              <ul className="font-medium text-gray-400">
                <li className="mb-4">
                  <a
                    // href="/assets/files/cv.pdf"
                    href="#"
                    title="Yet to be done"
                    target="_blank"
                    className="hover:underline"
                  >
                    CV
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                    title="Yet to be done"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2021 - {new Date().getFullYear()}{" "}
            <span className="font-semibold">Nusab Taha</span>. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function getSocialIcon({ title, href, iconSrc }) {
  return (
    <a
      key={title}
      href={href}
      target="_blank"
      title={`${title} account of Nusab Taha`}
    >
      <Image
        src={iconSrc}
        alt={title}
        width={8}
        height={8}
        className="h-8 w-8"
      />
    </a>
  );
}
