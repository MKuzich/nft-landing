import Container from "./Container";

const Subscribe = () => {
  return (
    <section>
      <div className="py-6 tablet:py-9 desktop:py-11 bg-gradient-to-r from-indigo-300 to-teal-300 container mx-auto">
        <Container>
          <div className="flex justify-center relative px-5 tablet:px-0">
            <form className="relative py-10 px-8 desktop:px-20 z-10 w-full tablet:w-3/4 desktop:w-2/3 bg-white/90 dark:bg-slate-700 rounded-xl">
              <h2 className="text-2xl tablet:text-3xl desktop:text-tagline text-center font-extrabold mb-6 tablet:mb-9 desktop:mb-14">
                Join our newsletter.
              </h2>
              <input
                className="subscribe-input"
                type="email"
                placeholder="Your Email"
              />
              <div className="bg-gradient-to-r from-black/60 dark:from-white/60 to-transparent h-0.5 w-5/6 desktop:w-11/12"></div>

              <button className="subscribe-btn" type="submit">
                Submit
              </button>
            </form>
            <div className="absolute bottom-18 tablet:bottom-18 desktop:bottom-21 right-submit-btn-mob tablet:right-19 desktop:right-40 h-5 w-5 bg-indigo-500 rotate-45"></div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Subscribe;
