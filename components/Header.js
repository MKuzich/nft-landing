import Image from "next/image";
import logo from "../public/logo.png";
import NavBar from "./NavBar";
import Container from "./Container";

const Header = () => (
  <header className="py-7 bg-slate-900">
    <Container>
      <div className="flex items-center justify-between">
        <div className="flex gap-16 items-center">
          <Image src={logo} alt="Logo" width={45} height={45} />
          <NavBar />
        </div>
        <div className="flex gap-7">
          <button>language</button>
          <button>Switch theme color</button>
          <div className="flex gap-4">
            <button className="header-btn">Sign in</button>
            <button className="header-gradient-btn">Register</button>
          </div>
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
