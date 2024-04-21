import { Link } from "react-router-dom";
import "./style.css";
import "../../Components/Headers/header.css";
import BalanceTaitel from "../../Components/Balance/balanceTaitle";
import { useTranslation } from "react-i18next";

function Balance() {
  const { t } = useTranslation();
  return (
    <div className="mainDiv">
      <div className="container">
        <BalanceTaitel balance={t("balancePraice")}/>
      </div>
      <Link to="/home" className="balance">
        Balance
      </Link>
    </div>
  );
}

export default Balance;
