import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./section.css";
function Doctors(props) {
    const { t } = useTranslation();
console.log(props);
  return (
    <>
      <div className="doctors_info_block">
        <div className="doc_img">
          <img
            className="redius"
            src={props.item.profile_image}
            alt=""
          />
        </div>
        <div className="block-top">
          <h4>{`${props.item.first_name} ${props.item.last_name}`}</h4>
          <span>{t("props.profession")}</span>
          <p>{t("props.seniority")}</p>
        </div>
      </div>
      <div className="block_btn">
        {/* <button className="section_btn_1">{user.state[0]}</button> */}
        <Link className="section_btn_2" to={`/user/${props.id}`}>
          {t("item.viewRecord")}
        </Link>
        <button className="section_btn_3">{t("item.viewResolution")}</button>
      </div>
    </>
  );
}

export default Doctors;
