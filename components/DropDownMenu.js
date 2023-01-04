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
  { id: 2, title: "GPM for Businesses and Teams", path: "/", icon: teamsIcon },
  { id: 3, title: "GPM Mall", path: "/", icon: mallIcon },
  { id: 4, title: "GPM Travel", path: "/", icon: travelIcon },
  { id: 5, title: "GPM Token", path: "/", icon: tokenIcon },
  { id: 6, title: "GPM Reseller", path: "/", icon: resellerIcon },
];

const DropDownMenu = ({ toggleDropDownMenu }) => {
  return (
    <div id="drop-down-products" className="drop-down-menu">
      <div className="bg-slate-800 w-7 h-7 rotate-45 hidden tablet:block absolute -top-2 left-10 rounded-sm"></div>
      <ul className="grid grid-cols-2 gap-2 w-full">
        {navigation.map(({ id, title, path, icon }) => (
          <li key={`${id}-drop-down`} className="mb-2 tablet:mb-0">
            <Link
              className="drop-down-link"
              href={path}
              onClick={toggleDropDownMenu}
            >
              <Image src={icon} alt={title} width={17} height={24} />

              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMenu;
