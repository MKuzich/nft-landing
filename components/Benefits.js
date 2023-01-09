import Image from "next/image";
import { useState, useEffect } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Container from "./Container";
import webDesign from "../public/web-design.png";

const benefits = [
  {
    title: "Customizable",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Quick sharing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Social network",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const Benefits = () => {
  const [imageSize, setImageSize] = useState(78);
  const isTablet = useMediaQuery(768);

  useEffect(() => {
    if (isTablet) {
      setImageSize(78);
    } else {
      setImageSize(68);
    }
  }, [isTablet]);
  return (
    <section className="py-10 tablet:py-16 desktop:py-20">
      <Container>
        <h2 className="hidden">Benefits</h2>
        <ul className="relative z-30 flex flex-col tablet:flex-row items-center justify-center gap-5 tablet:gap-10 desktop:gap-20">
          {benefits.map(({ title, text }) => (
            <li
              className="flex flex-col gap-2 items-center w-56 desktop:w-60 tablet:gap-3 drop-shadow-lg bg-slate-50/70 dark:bg-slate-700 rounded-xl py-4 px-1 tablet:p-5 desktop:p-6 bg-"
              key={title}
            >
              <Image
                src={webDesign}
                alt="Benefits"
                width={imageSize}
                height={imageSize}
              />
              <h3 className="text-base font-extrabold">{title}</h3>
              <p className="text-xs font-medium text-center">{text}</p>
            </li>
          ))}
        </ul>
        <div className="absolute right-96 -bottom-40 w-80 rounded-full h-80 blur-3xl bg-gradient-to-l from-teal-300/30 to-purple-500/30"></div>
      </Container>
    </section>
  );
};

export default Benefits;
