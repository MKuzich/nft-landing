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

const Header = ({
  toggleDropDownMenu,
  toggleLanguageSelection,
  languages,
  toggleModal,
  setFormType,
}) => {
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
    const body = document.querySelector("body");
    body.classList.toggle("overflow-hidden");
  };

  const onLanguageClick = () => {};

  const openModalWindow = (formType) => {
    setFormType(formType);
    toggleModal();
  };

  return (
    <header
      className={`relative z-10 pt-7 dark:bg-gradient-to-r from-gray-900/20 via-gray-900 to-gray-900/20 ${
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
            <Image src={title} alt="Company title" />
          </Link>

          <div className="tablet:flex tablet:gap-8 desktop:gap-16 items-center hidden">
            <Link href="/">
              <Image src={logo} alt="Logo" className="flex max-w-none" />
            </Link>
            <NavBar type="tablet" toggleDropDownMenu={toggleDropDownMenu} />
          </div>
          <div className="flex tablet:gap-5 desktop:gap-7 items-center">
            <button
              onClick={toggleLanguageSelection}
              type="button"
              className="hidden tablet:block rounded-full overflow-hidden"
            >
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
              <button
                onClick={() => openModalWindow("login")}
                className="header-btn"
                type="button"
              >
                Sign in
              </button>
              <button
                onClick={() => openModalWindow("register")}
                className="header-gradient-btn"
                type="button"
              >
                Register
              </button>
            </div>
          </div>
        </div>

        {isShowMenu && (
          <div className="fixed px-4 pt-2 pb-14 top-0 left-0 z-20 w-screen h-screen dark:bg-slate-700">
            <div className="bg-sky-50 dark:bg-slate-900 drop-shadow-2xl rounded-xl h-full flex flex-col items-center">
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
                  <button
                    onClick={() => openModalWindow("login")}
                    className="header-btn"
                    type="button"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => openModalWindow("register")}
                    className="header-gradient-btn"
                    type="button"
                  >
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
              <div className="absolute right-0 top-20 w-96 h-96 rounded-full blur-3xl bg-teal-300/20"></div>
              <div className="absolute left-10 bottom-10 w-1/2 rounded-3xl h-1/2 blur-3xl bg-indigo-500/40"></div>
            </div>
          </div>
        )}
      </Container>
      <div className="mt-7 h-px bg-gradient-to-l from-indigo-300/10 via-indigo-300 to-indigo-300/10"></div>
    </header>
  );
};

export default Header;
