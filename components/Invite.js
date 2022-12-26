import Image from "next/image";

const Invite = ({ path, title, text, btnTxt, width, height }) => {
  return (
    <section>
      <Image src={path} alt={title} width={width} height={height} />
      <h2>{title}</h2>
      <p>{text}</p>
      <button type="button">{btnTxt}</button>
    </section>
  );
};

export default Invite;
