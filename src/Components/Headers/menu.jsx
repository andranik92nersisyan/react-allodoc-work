import React, { useContext } from "react";
import MenuLogo from "./logo";
import MenuItem from "./menu-item";
import translationsRu from "../Data/translationsRu.json";
import translationEn from "../Data/translationEn.json";
import { TranslationContext } from "../../Page/Home/home";

function Menu({ setTranslation }) {
  const translation = useContext(TranslationContext);
  // console.log(translation.menu);
  // const [language, setLanguage] = useState("ru");

  // const changeLanguage = (lang) => {
  //   setLanguage(lang);
  // };

  return (
    <header className="header-blocked">
      <div className="container">
        <div className="header-ds-fl">
          <div className="translateRuEn">
            <p onClick={() => setTranslation(translationsRu)}>ru</p>
            <p onClick={() => setTranslation(translationEn)}>en</p>
            {/* {translations[language].map((item, index) => (
          <div key={index}>{item}</div>
        ))} */}
          </div>
          <MenuLogo />
          <MenuItem menuItems={translation.menu} />
        </div>
      </div>
    </header>
  );
}

export default Menu;
