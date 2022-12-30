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
          className="w-full h-full py-16"
          style={{ backgroundImage: `url(${trees.src})` }}
        >
          <Container>
            <div className="relative py-12 pl-20 pr-96 z-10 bg-slate-900 rounded-xl">
              <p className="text-tagline font-extrabold">{text}</p>
              <div className="absolute top-0 right-0 z-20 h-full w-1/2">
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
