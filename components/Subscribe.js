import Container from "./Container";

const Subscribe = () => {
  return (
    <section>
      <div className="py-11 bg-gradient-to-r from-indigo-300 to-teal-300 container mx-auto">
        <Container>
          <div className="flex justify-center relative">
            <form className="relative py-10 pl-20 pr-28 z-10 w-2/3 bg-slate-700 rounded-xl">
              <h2 className="text-tagline text-center font-extrabold mb-14">
                Join our newsletter.
              </h2>
              <input
                className="subscribe-input"
                type="email"
                placeholder="Your Email"
              />
              <div className="bg-gradient-to-r from-white/60 to-transparent h-0.5"></div>

              <button className="subscribe-btn" type="submit">
                Submit
              </button>
            </form>
            <div className="absolute bottom-spec right-40 h-5 w-5 bg-indigo-500 rotate-45"></div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Subscribe;
