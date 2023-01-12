import Container from "./Container";

const Hero = ({
  path,
  pathMob,
  imgPosition = "-bottom-11 tablet:-bottom-80 desktop:-bottom-48 left-auto right-auto tablet:right-0",
  start,
  accent,
  end,
  text,
  openModalWindow,
}) => {
  return (
    <section className="pt-9 tablet:pt-16 desktop:pt-24 pb-11 tablet:pb-80 desktop:pb-48">
      <Container>
        <div className="flex flex-col items-center tablet:block ">
          <h1 className="z-20 relative text-center tablet:text-start font-black text-3xl tablet:text-4xl desktop:text-6xl inline-block max-w-xl ">
            {start}
            <span className="relative bg-gradient-to-l from-purple-500 via-indigo-300 to-teal-300 bg-clip-text text-transparent">
              {accent}
            </span>
            {end}
          </h1>
          <p className="z-20 relative text-center tablet:text-start text-base tablet:text-xl desktop:text-2xl py-6 mb-80 tablet:mb-20 desktop:w-5/12">
            {text}
          </p>
          <button
            onClick={openModalWindow}
            className="gradient-btn"
            type="button"
          >
            Get started for free
          </button>
          <picture
            className={`absolute tablet:w-11/12 desktop:w-auto z-10 pointer-events-none ${imgPosition}`}
          >
            <source srcSet={path.src} media="(min-width: 768px)" />
            <img
              src={pathMob.src}
              alt="Clients"
              className="object-none tablet:object-contain"
            />
          </picture>

          <div className="absolute -bottom-11 tablet:-bottom-80 desktop:-bottom-48 left-0 w-full h-60 bg-gradient-to-t dark:from-slate-900 from-slate-50 dark:via-slate-900/90 via-slate-50/90 to-transparent z-20"></div>

          <div className="absolute left-0 -top-24 w-1/3 rounded-full h-full blur-2xl bg-gradient-to-b via-teal-300/30 from-purple-300/30 to-transparent"></div>
          <div className="absolute right-20 bottom-0 w-1/3 rounded-full h-full blur-2xl bg-gradient-to-t to-teal-300/30 from-purple-300/30 "></div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
