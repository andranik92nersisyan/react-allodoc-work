import logo from "../../Images/logo.png";
import MenuItem from "./menu-item";
import translationsRu from "../Data/translationsRu.json";
import translationEn from "../Data/translationEn.json";

function Menu({ setTranslation }) {
  return (
    <header className="header-blocked">
      <div className="container">
        <div className="header-ds-fl">
          <div className="translateRuEn">
            <p onClick={() => setTranslation(translationsRu)}>ru</p>
            <p onClick={() => setTranslation(translationEn)}>en</p>
          </div>
          <div className="header-fx">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <MenuItem menuItems={translationsRu.menu} />
        </div>
      </div>
    </header>
  );
}

export default Menu;
