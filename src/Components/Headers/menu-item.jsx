import "./header.css";
// import MenuList from "./menu-list";
import notifications from "../../Images/notifications.png";
import React, { useState } from "react";
import vector from "../../Images/vector.png";
import user from "../../Images/user.png";
import creditcard from "../../Images/credit-card.png";
import help from "../../Images/help.png";
import logout1 from "../../Images/logout.png";
import { Link } from "react-router-dom";

const MenuItem = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-item-fl">
      <nav className="navbar">
        <ul>
          {/* {translation.map((item, index) => (
            <li key={index}>
              <a href="#">{item[language]}</a>
            </li>
          ))} */}
          <li>
            <a href="#">{menuItems.howToUse}</a>
          </li>
          <li>
            <a href="#">{menuItems.myRecords}</a>
          </li>
          <li>
            <a href="#">{menuItems.makeAnAppointment}</a>
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
          <a href="#">Артем Свиридов </a>
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
                  <a href="#">Мой профиль</a>
                </div>
              </li>
              <li>
                <div className="open">
                  <img src={creditcard} alt="creditcard" />
                  <Link to="/balance">Пополнить баланс</Link>
                </div>
              </li>
              <li>
                <div className="open">
                  <img src={help} alt="help" />
                  <a href="#">FAQ</a>
                </div>
              </li>
              <li>
                <div className="open">
                  <img src={logout1} alt="logout1" />
                  <a href="#">Выйти</a>
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
