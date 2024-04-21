// Section.js
import React, { useEffect, useState } from "react";
import SectionDoctrs from "./sectionblock";
import "./section.css";
import { useTranslation } from "react-i18next";
import publicAPI from "../../Service/Api/publicAPI.js";

function Section() {
  const { t } = useTranslation();
  const [id, setId] = useState(1);
  const [section, setSection] = useState([]);

  useEffect(() => {
    publicAPI
      .get(`/?page=1&category=${id}`)
      .then((res) => {
        setSection(res.data.results);
      })
      .catch((err) => {
        alert("Errors․․․․it's wrong, please repeat it one more time", err);
      });
  }, [id]);

  return (
    <section>
      <div className="container">
        <div className="section_doctor_block">
          <div className="btn">
            <button className="section_btn_one">{t("records.myNotes")}</button>
            <div className="btn-link" style={{ marginTop: "5rem" }}>
              <button
                onClick={() => setId(1)}
                className={id === 1 ? "active" : ""}>
                {t("records.upcoming")}
              </button>
              <button
                // className="section_btn_onclick"
                onClick={() => setId(2)}
                className={id === 2 ? "active" : ""}>
                {t("records.past")}
              </button>
              <button
                // className="section_btn_onclick"
                onClick={() => setId(4)}
                className={id === 4 ? "active" : ""}>
                {t("records.canceled")}
              </button>
            </div>
          </div>
          <SectionDoctrs section={section} />
        </div>
      </div>
    </section>
  );
}

export default Section;
