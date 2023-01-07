import Image from "next/image";

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
  return (
    <section>
      <h2>Benefits</h2>
      <ul>
        {benefits.map(({ title, text }) => (
          <li key={title}>
            <Image src="/" alt="Benefits" width={78} height={78} />
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;
