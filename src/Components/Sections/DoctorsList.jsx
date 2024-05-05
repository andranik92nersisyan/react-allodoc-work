import { useMemo } from "react";
import "./DoctorStatus.jsx";
import calendar from "../../Images/calendar.png";
import clock from "../../Images/clock.png";
import videocamera from "../../Images/video-camera.png";
import { useTranslation } from "react-i18next";
import Doctors from "./Doctors.jsx";
import { useSelector } from "react-redux";
import { DoctorsListSelectors } from "../../store/selectors";
function DoctorsList() {

  const { t } = useTranslation();
  const { list,loading,  error } = useSelector(DoctorsListSelectors.doctorsList);
  const renderUsers = useMemo(() => {
    console.log(list,"list");
 
    return list.map((item, index) => {
      return (
        <div className="section-block" key={index}>
          <div className="section_fl">
            <div className="block-1">
              <div className="section_data_mg">
                <img src={calendar} alt="calendar" />
                <span className="call">{item.date_of_birth}</span>
                <img src={clock} alt="clock" />
                <span className="call">{t("users.time")}</span>
                <img className="data_img_camera" src={videocamera} />
                <span className="call"> {t("users.contacts.chat_one")} </span>
              </div>
            </div>
            <Doctors item={item} />
          </div>
        </div>
      );
    });
  }, [list]);

  return renderUsers;
}
export default DoctorsList;
