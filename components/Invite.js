import Image from "next/image";
import Container from "./Container";

//type = left, right, center

const Invite = ({ path, title, text, btnTxt, width, height, type }) => {
  return (
    <section className="relative py-28">
      <Container>
        <div className="flex">
          <Image
            className="absolute"
            src={path}
            alt={title}
            width={width}
            height={height}
          />
          <div className="absolute right-0 flex flex-col w-1/2">
            <h2>{title}</h2>
            <p>{text}</p>
            <button type="button">{btnTxt}</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Invite;
