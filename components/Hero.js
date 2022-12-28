import Container from "./Container";

const Hero = ({ title, text }) => {
  return (
    <section>
      <Container>
        <h1 className="font-black text-6xl inline-block max-w-xl">{title}</h1>
        <p className="text-2xl">{text}</p>
        <button type="button">Get started for free</button>
      </Container>
    </section>
  );
};

export default Hero;
