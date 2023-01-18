import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

const LanguageSelection = ({ toggleLanguageSelection, languages }) => {
  const [language, setLanguage] = useState("english");

  const onClickSelect = () => {
    toast.info("Sorry, we waiting for other languages!");
    toggleLanguageSelection();
  };

  return (
    <div className="drop-down-language">
      <div className="bg-sky-50 dark:bg-slate-800 w-7 h-7 rotate-45 hidden tablet:block absolute -top-2 left-7 rounded-sm"></div>
      <ul className="flex flex-col gap-7">
        {languages.map(({ title, flag }) => (
          <li key={`${title}-language-drop-down`} className="flex h-fit">
            <button
              onClick={onClickSelect}
              type="button"
              className="rounded-full overflow-hidden"
            >
              <Image
                src={flag}
                alt={`${title} language`}
                width={33}
                height={24}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelection;
