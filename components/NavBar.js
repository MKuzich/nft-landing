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
      <ul>
        {navigation.map(({ id, title, path }) => (
          <li key={id}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
