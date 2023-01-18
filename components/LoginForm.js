import { toast } from "react-toastify";

const LoginForm = ({ toggleModal }) => {
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
      <h2 className="font-extrabold text-2xl tablet:text-3xl desktop:text-titles">
        Log In form
      </h2>
      <div className="flex flex-col items-center gap-5 tablet:gap-6 desktop:gap-8 w-full">
        <input
          className="invite-input"
          name="email"
          type="email"
          placeholder="Your Email"
        />
        <input
          className="invite-input"
          name="password"
          type="text"
          placeholder="Your Password"
        />
      </div>
      <button className="gradient-btn" type="submit">
        Sign In!
      </button>
    </form>
  );
};

export default LoginForm;
