import Image from "next/image";

const items = [
  {
    id: "Q1",
    title: "KYC integration",
    text: "KYC integration",
  },
  {
    id: "Q2",
    title: "KYC integration",
    text: "KYC integration",
  },
  {
    id: "Q3",
    title: "KYC integration",
    text: "KYC integration",
  },
  {
    id: "Q4",
    title: "KYC integration",
    text: "KYC integration",
  },
  {
    id: "Q5",
    title: "KYC integration",
    text: "KYC integration",
  },
];

const Roadmap = () => {
  return (
    <section>
      <h2>Roadmap</h2>
      <Image src="/" alt="Road" width={189} height={331} />
      <ul>
        {items.map(({ id, title, text }) => (
          <li key={id}>
            <span>{id}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Roadmap;
