import { Link } from "react-router-dom";
import "./style.css";
import "../../Components/Headers/header.css";
function Balance() {


  return (
    <div className="mainDiv">
      <div className="container">
        <div className="balance">
          <h3>Баланс</h3>
          <div className="balance_naw">
            <p>1 058,68 </p>
            <button className="balance_btn">Пополнить счет</button>
          </div>
          <div className="balance_history">
            <b>История платежей</b>
            <span className="balance_data">За сегодня</span>
            <span className="balance_data">За месяц</span>
            <span className="balance_data">За все время</span>
          </div>
          <div className="balance_table">
            {/* <img href="#"/> */}
            <span className="balance_praice">10.03.2021</span>
            <span className="balance_praice">Пополнение</span>
            <span className="balance_praice">+ 560,00</span>
          </div>
        </div>
      </div>

      <Link to="/home" className="balance">
        Balance
      </Link>
    </div>
  );
}

export default Balance;
