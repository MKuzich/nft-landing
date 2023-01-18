import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import linkIcon from "../public/link-icon.svg";
import teamsIcon from "../public/teams-icon.svg";
import mallIcon from "../public/mall-icon.svg";
import travelIcon from "../public/travel-icon.svg";
import tokenIcon from "../public/token-icon.svg";
import resellerIcon from "../public/reseller-icon.svg";

const navigation = [
  { id: 1, title: "GPM Link", path: "/reference", icon: linkIcon },
  {
    id: 2,
    title: "GPM for Businesses and Teams",
    path: "/team",
    icon: teamsIcon,
  },
  { id: 3, title: "GPM Mall", path: "/", icon: mallIcon },
  { id: 4, title: "GPM Travel", path: "/", icon: travelIcon },
  { id: 5, title: "GPM Token", path: "/", icon: tokenIcon },
  { id: 6, title: "GPM Reseller", path: "/", icon: resellerIcon },
];

const NavBar = ({ type, toggleMenuButton, toggleDropDownMenu }) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const onClickHandler = () => {
    if (type !== "mobile") return;
    const productsList = document.querySelector(`#products${type}`);
    productsList.classList.toggle("hidden");
    setIsOpenDropDown(!isOpenDropDown);
  };

  return (
    <nav className="relative w-full flex flex-col tablet:flex-row tablet:gap-6 desktop:gap-14 tablet:items-center px-8 tablet:px-0">
      <button
        className={`${
          type === "mobile" ? "nav-link-mobile" : "nav-link-tablet"
        } justify-between`}
        type="button"
        onClick={type === "mobile" ? onClickHandler : toggleDropDownMenu}
      >
        Products
        {isOpenDropDown ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 tablet:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 tablet:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </button>
      <div id={`products${type}`} className="hidden">
        <div className="bg-slate-800 w-7 h-7 rotate-45 hidden tablet:block absolute -top-2 left-5 rounded-sm"></div>
        <ul
          className={`${
            type === "mobile" ? "" : "grid grid-cols-2 gap-2 "
          } w-full`}
        >
          {navigation.map(({ id, title, path, icon }) => (
            <li key={`${id}${type}`} className="mb-2 tablet:mb-0">
              <Link
                className={`${
                  type === "mobile" ? "nav-link-mobile" : "drop-down-link"
                } `}
                href={path}
                onClick={() => {
                  if (path === "/") {
                    toast.info("Sorry, we waiting content for this page!");
                  }
                  toggleDropDownMenu();
                }}
              >
                <Image src={icon} alt={title} width={17} height={24} />

                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link
        className={`${
          type === "mobile" ? "nav-link-mobile" : "nav-link-tablet"
        } mb-2 whitespace-nowrap`}
        href="/team"
        onClick={toggleMenuButton}
      >
        Contact us
      </Link>
    </nav>
  );
};

export default NavBar;
