import React from "react";
import MenuLogo from "./logo";
import MenuItem from "./menu-item";
import translationsData from "../Data/translations.json";
import { useState } from "react";

function Menu() {
  const [language, setLanguage] = useState("ru");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <header className="header-blocked">
      <div className="container">
        <div className="header-ds-fl">
          <div className="translateRuEn">
            <p onClick={() => changeLanguage("ru")}>ru</p>
            <p onClick={() => changeLanguage("en")}>en</p>
            {/* {translations[language].map((item, index) => (
          <div key={index}>{item}</div>
        ))} */}
          </div>
          <MenuLogo />
          <MenuItem menuItems={translationsData.menu} language={language} />
        </div>
      </div>
    </header>
  );
}

export default Menu;
