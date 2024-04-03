import React, { useState } from "react";
import "./header.css";
import vector from "../../Images/vector.png";
import user from "../../Images/user.png";
import creditcard from "../../Images/credit-card.png";
import help from "../../Images/help.png";
import logout1 from "../../Images/logout.png";

function MenuList() {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
                        <a href="#">Пополнить баланс</a>
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
  );
}

export default MenuList;
