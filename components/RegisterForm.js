const RegisterForm = () => {
  const onFormSubmitHandler = () => {};
  return (
    <form
      onSubmit={onFormSubmitHandler}
      className="w-full flex flex-col items-center gap-7 tablet:gap-10 desktop:gap-12 text-base"
    >
      <h2 className="font-extrabold text-2xl tablet:text-3xl desktop:text-titles">
        Sign up form
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
          name="name"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="invite-input"
          name="password"
          type="text"
          placeholder="Your Password"
        />
        <input
          className="invite-input"
          name="confirmPassword"
          type="text"
          placeholder="Confirm your Password"
        />
      </div>
      <button className="gradient-btn" type="submit">
        Sign Up!
      </button>
    </form>
  );
};

export default RegisterForm;
