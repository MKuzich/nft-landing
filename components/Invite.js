import Image from "next/image";
import Container from "./Container";

const Invite = ({
  path,
  pathMob,
  picOrder = 2,
  title,
  text,
  btnTxt,
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
              className={`ewrwfsdfdsfds ${
                picOrder === 4 && "mb-6"
              } tablet:mb-8 desktop:mb-12 font-extrabold text-2xl tablet:text-3xl desktop:text-titles desktop:mp-12 inline-block desktop:w-8/12 text-center`}
            >
              {title}
            </h2>
          )}
          {type !== "full-centered" && (
            <Image
              className={`hidden desktop:block tablet:absolute z-10 ${imgPosition}`}
              src={path}
              alt={title}
            />
          )}
          <div className={`flex ${type === "left" && "flex-row-reverse"}`}>
            {type !== "full-centered" && (
              <div
                className={`${
                  type !== "center" && "pt-16"
                } hidden tablet:flex items-center w-1/2 h-full`}
              >
                <Image
                  className="desktop:hidden relative z-10"
                  src={pathMob}
                  alt={title}
                />
              </div>
            )}
            <div
              className={`flex flex-col items-center tablet:gap-8 desktop:gap-12 z-30 ${
                type === "full-centered"
                  ? "w-full items-center"
                  : "tablet:w-1/2 tablet:items-start"
              }`}
            >
              {(type === "left" || type === "right") && (
                <h2
                  className={`${
                    picOrder === 4 && "mb-6"
                  } tablet:mb-0 font-extrabold text-center tablet:text-start text-2xl tablet:text-3xl desktop:text-titles`}
                >
                  {title}
                </h2>
              )}
              <p
                className={`${
                  picOrder === 2 && "mb-6"
                } tablet:mb-0 flex text-center tablet:text-${
                  type === "full-centered" ? "center" : "start"
                } order-3 tablet:w-5/6 ${
                  type === "full-centered" && "text-center"
                } text-sm tablet:text-base desktop:text-lg`}
              >
                {text}
              </p>

              {type === "full-centered" && (
                <Image
                  className={`hidden tablet:block order-${picOrder} z-10`}
                  src={path}
                  alt={title}
                />
              )}
              <Image
                className={`tablet:hidden relative z-10 order-${picOrder}`}
                src={pathMob}
                alt={title}
              />
              <button className="gradient-btn order-5" type="button">
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
