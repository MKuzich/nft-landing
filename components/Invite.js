import Image from "next/image";
import Container from "./Container";

const Invite = ({
  path,
  title,
  text,
  btnTxt,
  width,
  height,
  type,
  imgPosition,
  children,
}) => {
  return (
    <section className="relative py-10 tablet:py-16 desktop:py-20">
      <Container>
        <div className="flex flex-col items-center">
          {(type === "center" || type === "full-centered") && (
            <h2
              className={`font-extrabold text-2xl tablet:text-3xl desktop:text-titles mb-12 inline-block w-1/2 ${
                type === "full-centered" && "text-center"
              }`}
            >
              {title}
            </h2>
          )}
          {type !== "full-centered" && (
            <Image
              className={`tablet:absolute z-10 ${imgPosition}`}
              src={path}
              alt={title}
              width={width}
              height={height}
            />
          )}
          <div className={`flex ${type === "left" && "flex-row-reverse"}`}>
            {type !== "full-centered" && <div className="w-1/2 h-full"></div>}
            <div
              className={`flex flex-col gap-6 tablet:gap-8 desktop:gap-12 items-start z-30 ${
                type === "full-centered" ? "w-full items-center" : "w-1/2"
              }`}
            >
              {(type === "left" || type === "right") && (
                <h2 className="font-extrabold text-2xl tablet:text-3xl desktop:text-titles">
                  {title}
                </h2>
              )}
              <p
                className={`flex w-5/6 ${
                  type === "full-centered" && "text-center"
                } text-sm tablet:text-base desktop:text-lg`}
              >
                {text}
              </p>
              {type === "full-centered" && (
                <Image
                  className={`z-10 ${imgPosition}`}
                  src={path}
                  alt={title}
                  width={width}
                  height={height}
                />
              )}
              <button className="gradient-btn" type="button">
                {btnTxt}
              </button>
            </div>
          </div>
        </div>
        {children}
      </Container>
    </section>
  );
};

export default Invite;
