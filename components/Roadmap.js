import Image from "next/image";
import Container from "./Container";
import road from "../public/road.png";

const items = [
  {
    id: "Q1",
    title: "KYC integration",
    text: "KYC integration",
    color: "bg-location1",
  },
  {
    id: "Q2",
    title: "KYC integration",
    text: "KYC integration",
    color: "bg-location2",
  },
  {
    id: "Q3",
    title: "KYC integration",
    text: "KYC integration",
    color: "bg-location3",
  },
  {
    id: "Q4",
    title: "KYC integration",
    text: "KYC integration",
    color: "bg-location4",
  },
  {
    id: "Q5",
    title: "KYC integration",
    text: "KYC integration",
    color: "bg-location5",
  },
];

const Roadmap = () => {
  return (
    <section className="py-16">
      <div className="relative container mx-auto">
        <Image
          className="absolute top-20 z-1"
          src={road}
          alt="Road"
          width={1440}
          height={332}
        />
        <div className="absolute top-10 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 w-full h-96 z-10"></div>
        <Container>
          <h2 className="font-extrabold text-titles mb-96 z-20 relative">
            Roadmap
          </h2>
          <ul className="flex gap-9 relative px-8">
            {items.map(({ id, title, text, color }) => (
              <li key={id} className="w-1/5 flex flex-col items-center">
                <div
                  className={`relative z-10 drop-shadow-lg flex justify-center items-center rounded-full w-12 h-12 text-gray-800 text-xl font-black ${color}`}
                >
                  {id}
                </div>
                <div className="relative bottom-3 rounded-md bg-slate-700 py-7 px-4 text-base">
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
