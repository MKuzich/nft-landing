import { useEffect } from "react";

const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener(" keydown", handleKeyDown);
    };
  }, [toggleModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div className="backdrop" onClick={handleBackdropClick}>
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
