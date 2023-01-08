import Image from "next/image";
import Container from "./Container";
import road from "../public/road.png";
import roadMob from "../public/road-mob.png";
import { useMediaQuery } from "../hooks/useMediaQuery";

const items = [
  {
    id: "Q1",
    title: "KYC integration",
    text: "KYC integration",
    color: "bg-location3",
    colorDesktop: "bg-location1",
  },
  {
    id: "Q2",
    title: "KYC integration",
    text: "KYC integration",
    color: "bg-location5",
    colorDesktop: "bg-location2",
  },
  {
    id: "Q3",
    title: "KYC integration",
    text: "KYC integration",
    color: "bg-location1",
    colorDesktop: "bg-location3",
  },
  {
    id: "Q4",
    title: "KYC integration",
    text: "KYC integration",
    color: "bg-location4",
    colorDesktop: "bg-location4",
  },
  {
    id: "Q5",
    title: "KYC integration",
    text: "KYC integration",
    color: "bg-location2",
    colorDesktop: "bg-location5",
  },
];

const Roadmap = () => {
  const isDesktop = useMediaQuery(1440);

  return (
    <section className="py-8 desktop:py-16 h-road-mobile desktop:h-auto">
      <div className="relative w-96 tablet:w-7/12 desktop:w-auto mx-auto">
        <Image
          className="hidden desktop:block absolute top-20 z-1"
          src={road}
          alt="Road"
        />
        <Image
          className="desktop:hidden absolute left-auto right-auto z-1"
          src={roadMob}
          alt="Road"
        />
        <div className="absolute desktop:top-10 bg-gradient-to-b desktop:bg-gradient-to-r from-slate-50 via-transparent to-slate-50 dark:from-slate-900 dark:via-transparent dark:to-slate-900 w-full h-road-picture-mobile desktop:h-96 z-10"></div>
        <Container>
          <h2 className="text-center desktop:text-start font-extrabold text-2xl tablet:text-3xl desktop:text-titles mb-23 tablet:mb-22 desktop:mb-96 z-20 relative">
            Roadmap
          </h2>
          <ul className="flex flex-col desktop:flex-row gap-8 desktop:gap-9 absolute right-0 desktop:right-auto desktop:relative px-8 z-10">
            {items.map(({ id, title, text, color, colorDesktop }) => (
              <li
                key={id}
                className="desktop:w-1/5 flex desktop:flex-col items-center"
              >
                <div
                  className={`relative z-10 drop-shadow-lg flex justify-center items-center rounded-full w-9 desktop:w-12 h-9 desktop:h-12 text-gray-800 text-base desktop:text-xl font-black ${
                    isDesktop ? colorDesktop : color
                  }`}
                >
                  {id}
                </div>
                <div className="relative right-2 desktop:right-auto desktop:bottom-3 rounded-md drop-shadow-xl bg-white dark:bg-slate-700 py-3 desktop:py-7 px-5 tablet:px-7 desktop:px-4 text-xs desktop:text-base">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
};

export default Roadmap;
