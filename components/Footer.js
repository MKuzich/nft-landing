import Image from "next/image";
import { useState, useEffect } from "react";
import Container from "./Container";
import english from "../public/english.png";
import { useMediaQuery } from "../hooks/useMediaQuery";
import OpenMoreBtn from "./OpenMoreBtn";

const products = [
  { title: "GPM Link", path: "/" },
  { title: "GPM for Businesses and Teams", path: "/" },
  { title: "GPM Mall", path: "/" },
  { title: "GPM Travel", path: "/" },
  { title: "GPM Token", path: "/" },
  { title: "GPM Reseller", path: "/" },
];

const Footer = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [isOpenProducts, setIsOpenProducts] = useState(false);
  const [isOpenPolicy, setIsOpenPolicy] = useState(false);
  const [isOpenApp, setIsOpenApp] = useState(false);

  const isTablet = useMediaQuery(768);

  useEffect(() => {
    setIsOpenLanguage(isTablet);
    setIsOpenProducts(isTablet);
    setIsOpenPolicy(isTablet);
    setIsOpenApp(isTablet);
  }, [isTablet]);

  return (
    <footer className="py-10 tablet:py-16 desktop:py-20">
      <Container>
        <div className="w-3/4 tablet:w-auto mx-auto flex flex-col tablet:flex-row tablet:gap-5 desktop:gap-10">
          <div className="footer-category">
            <div className="flex justify-between items-center mb-2 desktop:mb-3">
              <h2 className="footer-title">Language</h2>
              <OpenMoreBtn
                func={setIsOpenLanguage}
                value={isOpenLanguage}
                classes="tablet:hidden"
                big={false}
              />
            </div>
            {isOpenLanguage && (
              <div className="flex items-center gap-3">
                <button className="rounded-full overflow-hidden" type="button">
                  <Image src={english} alt="language" width={33} height={24} />
                </button>
                <span className="font-medium font-secondary text-xs tablet:text-sm desktop:text-base">
                  English
                </span>
              </div>
            )}
          </div>
          <div className="footer-category">
            <div className="flex justify-between items-center mb-2 desktop:mb-3">
              <h2 className="footer-title">GPM Products</h2>
              <OpenMoreBtn
                func={setIsOpenProducts}
                value={isOpenProducts}
                classes="tablet:hidden"
                big={false}
              />
            </div>
            {isOpenProducts && (
              <ul>
                {products.map(({ title, path }) => (
                  <li key={title} className="footer-category-item">
                    <a href={path}>{title}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="footer-category">
            <div className="flex justify-between items-center mb-2 desktop:mb-3">
              <h2 className="footer-title">Trust & Legal</h2>
              <OpenMoreBtn
                func={setIsOpenPolicy}
                value={isOpenPolicy}
                classes="tablet:hidden"
                big={false}
              />
            </div>
            {isOpenPolicy && (
              <ul>
                <li className="footer-category-item">
                  <a href="">Privacy & Policy</a>
                </li>
                <li className="footer-category-item">
                  <a href="">Terms and Conditions</a>
                </li>
              </ul>
            )}
          </div>
          <div className="footer-category">
            <div className="flex justify-between items-center mb-2 desktop:mb-3">
              <h2 className="footer-title">App</h2>
              <OpenMoreBtn
                func={setIsOpenApp}
                value={isOpenApp}
                classes="tablet:hidden"
                big={false}
              />
            </div>
          </div>
        </div>
        <p className="text-center mt-20 text-white/70 text-xs teblet:text-sm desktop:text-base">
          Copyright &copy; 2022 All rights reserved - Gopop.me
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
