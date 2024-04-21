import React from "react";
import { useTranslation } from "react-i18next";

function BalnceBtn({ onFilter }) {
  const { t } = useTranslation();

  const handleFilter = (filterType) => {
    onFilter(filterType);
  };

  return (
    <div className="balance_status">
      <button className="balance_data" onClick={() => handleFilter("За сегодня")}>
        {t("balancData1")}
      </button>
      <button className="balance_data" onClick={() => handleFilter("За месяц")}>
        {t("balancData2")}
      </button>
      <button className="balance_data" onClick={() => handleFilter("За все время")}>
        {t("balancData3")}
      </button>
    </div>
  );
}

export default BalnceBtn;
