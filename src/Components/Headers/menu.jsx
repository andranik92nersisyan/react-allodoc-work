import logo from "../../Images/logo.png";
import MenuItem from "./menu-item";
import { useTranslation } from "react-i18next";
import i18n from "../../Service/i18next";

function Menu() {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="header-blocked">
      <div className="container">
        <div className="header-ds-fl">
          <div className="translateRuEn">
            <p onClick={() => changeLanguage("ru")}>ru</p>
            <p onClick={() => changeLanguage("en")}>en</p>
          </div>
          <div className="header-fx">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <MenuItem menuItems={t("menu")} />
        </div>
      </div>
    </header>
  );
}

export default Menu;
