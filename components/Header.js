import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import dark from "../public/dark.png";
import light from "../public/light.png";
import english from "../public/english.png";
import title from "../public/title.png";
import NavBar from "./NavBar";
import Container from "./Container";

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isShowMenu, setIsShowMenu] = useState(false);

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
  };

  return (
    <header className="relative z-10 pt-7 bg-gradient-to-r from-gray-900/20 via-gray-900 to-gray-900/20">
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
            <NavBar />
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
          <div className="relative -top-12 -left-7 z-50 w-screen h-screen bg-slate-900">
            <div className="flex items-center justify-between w-full">
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

              <NavBar />
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

                <div className="flex gap-4">
                  <button className="header-btn" type="button">
                    Sign in
                  </button>
                  <button className="header-gradient-btn" type="button">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
      <div className="mt-7 h-px bg-gradient-to-l from-indigo-300/10 via-indigo-300 to-indigo-300/10"></div>
    </header>
  );
};

export default Header;
