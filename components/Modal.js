const Modal = ({ children, toggleModal }) => {
  return (
    <div className="backdrop">
      <div className="absolute -right-28 -top-48 w-1/3 rounded-full h-full blur-3xl bg-gradient-to-l from-teal-400/40 to-purple-500/40"></div>
      <div className="absolute rotate-18 -left-28 -bottom-48 w-2/3 rounded-full h-1/2 blur-3xl bg-gradient-to-bl from-teal-400/40 to-purple-500/40"></div>
      <div className="absolute border dark:border-0 drop-shadow-xl flex justify-center w-11/12 tablet:w-99 desktop:w-100 py-10 tablet:py-12 desktop:py-16 px-8 tablet:px-16 desktop:px-20 bg-slate-100 dark:bg-slate-900 rounded-xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <button
          className="absolute top-5 right-5"
          type="button"
          onClick={toggleModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
