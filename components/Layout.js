import Head from "next/head";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import DropDownMenu from "./DropDownMenu";
import LanguageSelection from "./LanguageSelection";
import Modal from "./Modal";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import ContactForm from "./ContactForm";
import english from "../public/english.png";
import spanish from "../public/spanish.png";
import french from "../public/french.png";

const languages = [
  { title: "english", flag: english },
  { title: "french", flag: french },
  { title: "spanish", flag: spanish },
];

const Layout = ({
  children,
  toggleModal,
  setFormType,
  isOpenModal,
  formType,
}) => {
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
    <>
      <Head>
        <title>GoPopMe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="container mx-auto overflow-hidden relative">
        <Header
          toggleDropDownMenu={toggleDropDownMenu}
          toggleLanguageSelection={toggleLanguageSelection}
          languages={languages}
          toggleModal={toggleModal}
          setFormType={setFormType}
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
        {isOpenModal && (
          <Modal toggleModal={toggleModal}>
            {formType === "register" && <RegisterForm />}
            {formType === "login" && <LoginForm />}
            {formType === "contact" && <ContactForm />}
          </Modal>
        )}
      </div>
    </>
  );
};

export default Layout;
