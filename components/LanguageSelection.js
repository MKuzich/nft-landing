import { useState } from "react";
import Image from "next/image";

const LanguageSelection = ({ toggleLanguageSelection, languages }) => {
  const [language, setLanguage] = useState("english");

  return (
    <div className="drop-down-language">
      <div className="bg-slate-800 w-7 h-7 rotate-45 hidden tablet:block absolute -top-2 left-7 rounded-sm"></div>
      <ul className="flex flex-col gap-9">
        {languages.map(({ title, flag }) => (
          <li key={`${title}-language-drop-down`}>
            <Image
              src={flag}
              alt={`${title} language`}
              width={33}
              height={24}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelection;
