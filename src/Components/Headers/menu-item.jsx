import "./header.css";
import MenuList from "./menu-list";
import notifications from "../../Images/notifications.png";
import React from 'react';


const MenuItem = ({ menuItems, language }) => {
  return (
    <div className="menu-item-fl">
      <nav className="navbar">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#">{item[language]}</a>
            </li>
          ))}
        </ul>
        <div className="user_icon">
          <img src={notifications} alt="notifications" />
        </div>
        <div className="menu_isName">
          <h4>A</h4>
        </div>
      </nav>
      <MenuList />
    </div>
  );
}

export default MenuItem;

// function MenuItem() {
//   return (
//     <div className="menu-item-fl">
//       <nav className="navbar">
//         <ul>
//           <li>
//             <a href="#">item1</a>
//           </li>
//           <li>
//             <a href="#">item21</a>
//           </li>
//           <li>
//             <a href="#">item3</a>
//           </li>
//         </ul>
//         <div className="user_icon">
//           <img src={notifications} alt="notifications" />
//         </div>
//         <div className="menu_isName">
//           <h4>A</h4>
//         </div>
//       </nav>
//       <MenuList />
//     </div>
//   );
// }

// export default MenuItem;
