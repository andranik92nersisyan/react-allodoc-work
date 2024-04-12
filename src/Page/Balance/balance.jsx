import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Balance() {
  useEffect(() => {
    console.log("hellllooo");
  }, []);

  return (
    <div className="mainDiv">
      <Link to="/home" className="balance">
        Balance
      </Link>
      <div>
        <p>Balance!</p>
      </div>
      <p>helllllloooosdafadsfasdf</p>
    </div>
  );
}

export default Balance;
