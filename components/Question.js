import { useState } from "react";

const Question = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li>
      <div className="flex items-start">
        <div className="flex flex-col gap-3 tablet:gap-4 desktop:gap-6 w-11/12">
          <h3 className="font-extrabold text-base tablet:text-xl desktop:text-2xl">
            {title}
          </h3>
          {isOpen && (
            <p className="text-xs tablet:text-sm desktop:text-base">{text}</p>
          )}
        </div>
        <button className="relative z-20" type="button" onClick={onClickToggle}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="bg-gradient-to-l from-transparent via-black/60 dark:via-white/60 to-transparent h-0.5 mt-4 tablet:mt-5 desktop:mt-7"></div>
    </li>
  );
};

export default Question;
