// SectionDoctrs.js
import React, { useMemo } from "react";
import "./section.css";
import calendar from "../../Images/calendar.png";
import clock from "../../Images/clock.png";
import videocamera from "../../Images/video-camera.png";
import { useTranslation } from "react-i18next";
import Doctors from "./doctrs";

function SectionDoctrs(props) {
  const { t } = useTranslation();
console.log(props.section);
  const renderUsers = useMemo(() => {
    return props.section.map((item, index) => {
      return (
        <div className="section-block" key={index}>
          <div className="section_fl">
            <div className="block-1">
              <div className="section_data_mg">
                <img src={calendar} alt="calendar" />
                <span className="call">{item.date_of_birth}</span>
                <img src={clock} alt="clock" />
                <span className="call">{item.near_date}</span>
                <img className="data_img_camera" src={videocamera}/>
                  <span className="call">{t("users.contacts")}</span>
              </div>
            </div>
            <Doctors item={item}/>
          </div>
        </div>
      );
    });
  }, [props]);

  return renderUsers;
}
export default SectionDoctrs;
