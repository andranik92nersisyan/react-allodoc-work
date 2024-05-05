import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BalanceCard from "./BalanceCard";
import balanceDataRu from "../data/translationsRu.json";
import balanceDataEn from "../data/translationsEn.json";
import BalnceBtn from "./BalanceBtn";
function BalanceTaitel() {
  const { t, i18n } = useTranslation();
  const data = i18n.language === "ru" ? balanceDataRu : balanceDataEn;
  const [filteredBalance, setFilteredBalance] = useState(
    data.translation.balancePraice
  );

  useEffect(() => {
    setFilteredBalance(data.translation.balancePraice);
    console.log("language changed");
  }, [i18n.language]);

  const filterBalance = (filterType) => {
    if (filterType === "За сегодня") {
      setFilteredBalance(
        data.translation.balancePraice.filter(
          (item) => item.status === "За сегодня"
        )
      );
    } else if (filterType === "За месяц") {
      setFilteredBalance(
        data.translation.balancePraice.filter(
          (item) => item.status === "За месяц"
        )
      );
    } else if (filterType === "За все время") {
      setFilteredBalance(data.translation.balancePraice);
    }
  };
  return (
    <div className="balance_title">
      <h3>{t("balanceTitles")}</h3>
      <div className="balance_naw">
        <p className="balance_p">{t("balancePraices")} $</p>
        <button className="balance_btn">{t("balanceButtons")}</button>
      </div>
      <div className="balance_history">
        <b>{t("balancTitles")}</b>
        <BalnceBtn onFilter={filterBalance} />
      </div>
      <BalanceCard balancePraice={filteredBalance} />
    </div>
  );
}

export default BalanceTaitel;
