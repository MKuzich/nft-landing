import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import DropDownMenu from "./DropDownMenu";
import LanguageSelection from "./LanguageSelection";
import english from "../public/english.png";
import spanish from "../public/spanish.png";
import french from "../public/french.png";

const languages = [
  { title: "english", flag: english },
  { title: "french", flag: french },
  { title: "spanish", flag: spanish },
];

const Layout = ({ children }) => {
  const [isShowDropDownMenu, setIsShowDropDownMenu] = useState(false);
  const [isShowLanguageSelection, setIsShowLanguageSelection] = useState(false);

  const toggleDropDownMenu = () => {
    setIsShowDropDownMenu(!isShowDropDownMenu);
    setIsShowLanguageSelection(false);
  };

  const toggleLanguageSelection = () => {
    setIsShowLanguageSelection(!isShowLanguageSelection);
    setIsShowDropDownMenu(false);
  };

  return (
    <div className="container mx-auto overflow-hidden relative">
      <Header
        toggleDropDownMenu={toggleDropDownMenu}
        toggleLanguageSelection={toggleLanguageSelection}
        languages={languages}
      />
      {children}
      <Footer />
      {isShowDropDownMenu && (
        <DropDownMenu toggleDropDownMenu={toggleDropDownMenu} />
      )}
      {isShowLanguageSelection && (
        <LanguageSelection
          toggleLanguageSelection={toggleLanguageSelection}
          languages={languages}
        />
      )}
    </div>
  );
};

export default Layout;
