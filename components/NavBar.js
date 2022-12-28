import { useRouter } from "next/router";
import Link from "next/link";

const navigation = [
  { id: 1, title: "Products", path: "/" },
  { id: 2, title: "Contact us", path: "/team" },
];

const NavBar = () => {
  const { pathname } = useRouter;
  return (
    <nav>
      <ul className="flex gap-14">
        {navigation.map(({ id, title, path }) => (
          <li key={id}>
            <Link
              className="hover:text-purple-600 font-medium text-white py-2"
              href={path}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
