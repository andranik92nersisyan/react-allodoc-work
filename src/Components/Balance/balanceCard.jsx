import React from "react";
import "./BalanceCard.css";

export default function BalanceCard({ balancePraice }) {
  console.log(balancePraice, "data");

  return (
    <div className="balance">
      <div className="balance_table">
        {balancePraice?.map((item) => (
          <div key={item.id} className="balance_data_wrap">
              <img className="img_data"
                src={require(`../../Images/${item.img}`)}
                alt=""
              />
            <b className="balance_price"> {item.time} </b>
            <span className="balance_price"> {item.title} </span>
            <b
              className="balance_price"
              style={
                item.status === "За месяц"
                  ? { color: "red" }
                  : { color: "green" }
              }
            >
              {item.price} $
            </b>
          </div>
        ))}
      </div>
    </div>
  );
}
