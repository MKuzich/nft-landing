const Hero = ({ title, text }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      <button type="button">Get started for free</button>
    </>
  );
};

export default Hero;
