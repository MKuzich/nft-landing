import Image from "next/image";
import Container from "./Container";
import english from "../public/english.png";

const products = [
  { title: "GPM Link", path: "/" },
  { title: "GPM for Businesses and Teams", path: "/" },
  { title: "GPM Mall", path: "/" },
  { title: "GPM Travel", path: "/" },
  { title: "GPM Token", path: "/" },
  { title: "GPM Reseller", path: "/" },
];

const Footer = () => (
  <footer className="py-20">
    <Container>
      <div className="flex gap-10">
        <div className="footer-category">
          <h2 className="footer-title">Language</h2>
          <div className="flex items-center gap-3">
            <button type="button">
              <Image src={english} alt="language" width={33} height={24} />
            </button>
            <span className="footer-category-item">English</span>
          </div>
        </div>
        <div className="footer-category">
          <h2 className="footer-title">GPM Products</h2>
          <ul>
            {products.map(({ title, path }) => (
              <li key={title} className="footer-category-item">
                <a href={path}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-category">
          <h2 className="footer-title">Trust & Legal</h2>
          <ul>
            <li className="footer-category-item">
              <a href="">Privacy & Policy</a>
            </li>
            <li>
              <a href="">Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-category">
          <h2 className="footer-title">App</h2>
        </div>
      </div>
      <p className="text-center mt-20 text-white/70">
        Copyright &copy; 2022 All rights reserved - Gopop.me
      </p>
    </Container>
  </footer>
);

export default Footer;
