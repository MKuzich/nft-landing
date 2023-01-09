import { useState } from "react";
import Image from "next/image";

const LanguageSelection = ({ toggleLanguageSelection, languages }) => {
  const [language, setLanguage] = useState("english");

  const onClickSelect = () => {};

  return (
    <div className="drop-down-language">
      <div className="bg-sky-50 dark:bg-slate-800 w-7 h-7 rotate-45 hidden tablet:block absolute -top-2 left-7 rounded-sm"></div>
      <ul className="flex flex-col gap-7">
        {languages.map(({ title, flag }) => (
          <li key={`${title}-language-drop-down`} className="flex h-fit">
            <button type="button" className="rounded-full overflow-hidden">
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
