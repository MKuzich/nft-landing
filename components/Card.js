import Image from "next/image";
import Container from "./Container";
import pine from "../public/pine.png";
import card from "../public/card.png";
import trees from "../public/trees.png";

const Card = ({ text }) => {
  return (
    <section>
      <div className="bg-gradient-to-r from-indigo-300 to-teal-300 container mx-auto">
        <div
          className="w-full h-full px-5 desktop:px-0 py-8 desktop:py-16 bg-cover"
          style={{ backgroundImage: `url(${trees.src})` }}
        >
          <Container>
            <div className="relative pt-4 pb-5 px-7 desktop:py-12 desktop:pl-20 desktop:pr-96 z-10 bg-white/90 dark:bg-slate-900 rounded-xl">
              <p className="text-center desktop:text-start text-base desktop:text-tagline font-extrabold">
                {text}
              </p>
              <div className="hidden desktop:block absolute top-0 right-0 z-20 h-full w-1/2">
                <Image
                  className="absolute -top-12 -right-14"
                  src={card}
                  alt="Card"
                  width={415}
                  height={346}
                />
                <Image
                  className="absolute -top-14 right-1"
                  src={pine}
                  alt="Tree"
                  width={189}
                  height={331}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Card;
