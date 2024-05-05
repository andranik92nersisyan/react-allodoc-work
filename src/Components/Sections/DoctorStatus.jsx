import React, { useCallback, useEffect, useState } from "react";
import DoctorsList from "./DoctorsList.jsx";
import "./Section.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { DoctorsListActions } from "../../store/actions";

function DoctorsStatus() {
  const { t } = useTranslation();
  const [id, setId] = useState(1);
  const dispatch = useDispatch();
  const clickHandler = useCallback(
    (id) => {
      return () => {
        dispatch(DoctorsListActions.get(id));
        setId(id);
      };
    },
    [dispatch]
  );
  useEffect(()=> {
    dispatch(DoctorsListActions.get(1));
  },[dispatch])
  return (
    <section>
      <div className="container">
        <div className="section_doctor_block">
          <div className="btn">
            <button className="section_btn_one">{t("records.myNotes")}</button>
            <div className="btn-link" style={{ marginTop: "5rem" }}>
              <button
                onClick={clickHandler(1)}
                className={id === 1 ? "active" : ""}
              >
                {t("records.upcoming")}
              </button>
              <button
                // className="section_btn_onclick"
                onClick={clickHandler(2)}
                className={id === 2 ? "active" : ""}
              >
                {t("records.past")}
              </button>
              <button
                // className="section_btn_onclick"
                onClick={clickHandler(4)}
                className={id === 4 ? "active" : ""}
              >
                {t("records.canceled")}
              </button>
            </div>
          </div>
          <DoctorsList />
        </div>
      </div>
    </section>
  );
}

export default DoctorsStatus;
