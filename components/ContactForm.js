import Container from "./Container";

const ContactForm = () => {
  return (
    <section className="py-10 tablet:py-16 desktop:py-20">
      <Container>
        <form className="flex flex-col items-center gap-11 desktop:gap-14 text-base relative z-20">
          <h2 className="font-extrabold text-2xl tablet:text-3xl desktop:text-titles">
            Contact us
          </h2>
          <div className="flex flex-col items-center gap-6 w-5/6 tablet:w-3/4 desktop:w-2/3">
            <input
              className="invite-input"
              type="text"
              placeholder="Your Name/Company"
            />
            <input
              className="invite-input"
              type="email"
              placeholder="Your Email"
            />
            <textarea
              className="invite-input"
              rows={5}
              placeholder="Your Message"
            />
          </div>
          <button className="gradient-btn" type="submit">
            Submit
          </button>
        </form>
        <div className="absolute left-72 top-10 w-1/6 rounded-full h-60 blur-3xl bg-gradient-to-br to-teal-300/50 via-purple-300/40 from-purple-300/60"></div>
        <div className="absolute right-72 bottom-0 w-1/4 rounded-full h-80 blur-3xl bg-gradient-to-br to-teal-300/50 from-purple-300/60"></div>
      </Container>
    </section>
  );
};

export default ContactForm;
