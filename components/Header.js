import { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import dark from "../public/dark.png";
import light from "../public/light.png";
import english from "../public/english.png";
import NavBar from "./NavBar";
import Container from "./Container";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleThemeStyle = () => {
    const page = document.querySelector("html");
    page.classList.toggle("dark");
    if (page.classList.contains("dark")) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };
  return (
    <header className="pt-7 bg-slate-900">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex gap-16 items-center">
            <Image src={logo} alt="Logo" width={45} height={45} />
            <NavBar />
          </div>
          <div className="flex gap-7 items-center">
            <button type="button">
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
              <button className="header-btn">Sign in</button>
              <button className="header-gradient-btn">Register</button>
            </div>
          </div>
        </div>
      </Container>
      <div className="mt-7 h-px bg-gradient-to-l from-indigo-300/10 via-indigo-300 to-indigo-300/10"></div>
    </header>
  );
};

export default Header;
