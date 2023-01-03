import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import dark from "../public/dark.png";
import light from "../public/light.png";
import english from "../public/english.png";
import spanish from "../public/spanish.png";
import french from "../public/french.png";
import title from "../public/title.png";
import NavBar from "./NavBar";
import Container from "./Container";

const languages = [
  { title: "english", flag: english },
  { title: "french", flag: french },
  { title: "spanish", flag: spanish },
];

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [language, setLanguage] = useState("english");

  const toggleThemeStyle = () => {
    const page = document.querySelector("html");
    page.classList.toggle("dark");
    if (page.classList.contains("dark")) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };

  const toggleMenuButton = () => {
    setIsShowMenu(!isShowMenu);
    const body = document.querySelector("body");
    body.classList.toggle("overflow-hidden");
  };

  const onLanguageClick = () => {};

  return (
    <header
      className={`relative z-10 pt-7 bg-gradient-to-r from-gray-900/20 via-gray-900 to-gray-900/20 ${
        isShowMenu && "w-screen h-screen"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between w-full">
          <button
            className="tablet:hidden"
            type="button"
            onClick={toggleMenuButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <Link className="tablet:hidden" href="/">
            <Image src={title} alt="Company title" width={120} height={22} />
          </Link>

          <div className="tablet:flex gap-16 items-center hidden">
            <Link href="/">
              <Image src={logo} alt="Logo" width={45} height={45} />
            </Link>
            <NavBar type="tablet" />
          </div>
          <div className="flex gap-7 items-center">
            <button type="button" className="hidden tablet:block">
              <Image src={english} alt="language" width={33} height={24} />
            </button>
            <button
              className="z-20 p-0 object-cover h-6"
              type="button"
              onClick={toggleThemeStyle}
            >
              <Image
                src={isDark ? dark : light}
                alt="Theme toggler"
                width={52}
                height={24}
              />
            </button>

            <div className="tablet:flex gap-4 hidden">
              <button className="header-btn" type="button">
                Sign in
              </button>
              <button className="header-gradient-btn" type="button">
                Register
              </button>
            </div>
          </div>
        </div>

        {isShowMenu && (
          <div className="fixed px-4 pt-2 pb-14 top-0 left-0 z-20 w-screen h-screen bg-slate-700">
            <div className=" bg-slate-900 rounded-xl h-full flex flex-col items-center">
              <div className="flex items-center justify-between w-full pt-5 px-3 mb-12">
                <button type="button" onClick={toggleMenuButton}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    id="close-menu-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <Link href="/">
                  <Image
                    src={title}
                    alt="Company title"
                    width={120}
                    height={22}
                  />
                </Link>
                <button
                  className="z-20 p-0 object-cover h-6"
                  type="button"
                  onClick={toggleThemeStyle}
                >
                  <Image
                    src={isDark ? dark : light}
                    alt="Theme toggler"
                    width={52}
                    height={24}
                  />
                </button>
              </div>
              <NavBar type="mobile" toggleMenuButton={toggleMenuButton} />
              <div className="flex gap-7 items-center mt-9">
                <div className="flex gap-4">
                  <button className="header-btn" type="button">
                    Sign in
                  </button>
                  <button className="header-gradient-btn" type="button">
                    Register
                  </button>
                </div>
              </div>
              <ul className="flex gap-6 mt-9">
                {languages.map(({ title, flag }) => (
                  <li key={title} className="relative z-30">
                    <button
                      type="button"
                      width={38}
                      height={27}
                      className="rounded-lg overflow-hidden"
                      onClick={onLanguageClick}
                    >
                      <Image
                        src={flag}
                        alt={`${title} language`}
                        width={33}
                        height={24}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-0 top-20 w-96 h-96 rounded-full blur-3xl bg-teal-300/20"></div>
            <div className="absolute left-10 bottom-10 w-1/2 rounded-3xl h-1/2 blur-3xl bg-indigo-500/40"></div>
          </div>
        )}
      </Container>
      <div className="mt-7 h-px bg-gradient-to-l from-indigo-300/10 via-indigo-300 to-indigo-300/10"></div>
    </header>
  );
};

export default Header;
