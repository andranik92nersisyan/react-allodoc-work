import "./header.css";
// import MenuList from "./menu-list";
import notifications from "../../Images/notifications.png";
import React, { useState, useContext } from "react";
import vector from "../../Images/vector.png";
import user from "../../Images/user.png";
import creditcard from "../../Images/credit-card.png";
import help from "../../Images/help.png";
import logout1 from "../../Images/logout.png";
import { Link } from "react-router-dom";
import { TranslationContext } from "../../App";
import { useTranslation } from "react-i18next";

const MenuItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const t = useContext(TranslationContext);
  const {t} = useTranslation()

  return (
    <div className="menu-item-fl">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">{t("howToUse")}</a>
          </li>
          <li>
            <a href="#">{t("myRecords")}</a>
          </li>
          <li>
            <a href="#">{t("makeAnAppointment")}</a>
          </li>
        </ul>
        <div className="user_icon">
          <img src={notifications} alt="notifications" />
        </div>
        <div className="menu_isName">
          <h4>A</h4>
        </div>
      </nav>
      <div className="menu-list">
        <p className="list-name">
          <a href="#">{t("menuName")}</a>
        </p>
        <div className="menu_btn">
          <button onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}>
            {isOpen}
            <img className="menu_btn_icon" src={vector} alt="vector" />
          </button>
        </div>
        {isOpen && (
          <div className="list">
            <ul>
              <li>
                <div className="open">
                  <img src={user} alt="user" />
                  <a href="#">{t("myProfile")}</a>
                </div>
              </li>
              <li>
                <div className="open">
                  <img src={creditcard} alt="creditcard" />
                  <Link to="/balance">{t("topUpBalance")}</Link>
                </div>
              </li>
              <li>
                <div className="open">
                  <img src={help} alt="help" />
                  <a href="#">{t("faq")}</a>
                </div>
              </li>
              <li>
                <div className="open">
                  <img src={logout1} alt="logout1" />
                  <a href="#">{t("exit")}</a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
