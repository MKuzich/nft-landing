import Image from "next/image";

const Card = ({ text }) => {
  return (
    <section>
      <div>
        <p>{text}</p>
        <Image src="/" alt="Tree" width={189} height={331} />
        <Image src="/" alt="Card" width={320} height={203} />
      </div>
    </section>
  );
};

export default Card;
