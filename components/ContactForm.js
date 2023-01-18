import { toast } from "react-toastify";

const ContactForm = ({ toggleModal }) => {
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.info("Sorry, this function waiting for integration to domain!");
    toggleModal();
  };
  return (
    <form
      onSubmit={onFormSubmitHandler}
      className="w-full flex flex-col items-center gap-7 tablet:gap-10 desktop:gap-12 text-base"
    >
      <h2 className="text-center font-extrabold text-2xl tablet:text-3xl desktop:text-titles">
        Fill the form for contact
      </h2>
      <div className="flex flex-col items-center gap-5 tablet:gap-6 desktop:gap-8 w-full">
        <input
          className="invite-input"
          type="text"
          placeholder="Your Name/Company"
        />
        <input className="invite-input" type="email" placeholder="Your Email" />
        <textarea
          className="invite-input"
          rows={5}
          placeholder="Your Message"
        />
      </div>
      <button className="gradient-btn" type="submit">
        Contact me !
      </button>
    </form>
  );
};

export default ContactForm;
