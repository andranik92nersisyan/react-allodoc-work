import { Navigate, useParams } from "react-router-dom";
import i18n from "../../service/i18next.js";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import "../../components/headers/Header.css";
import rubli from "../../Images/rubli.png";
import mortarboard from "../../Images/mortarboard.png";
import appcalendar from "../../Images/appcalendar.png";
import roupe from "../../Images/roupe.png";
import plus from "../../Images/plus.png";
import { DoctorsProfileSelector } from "../../store/selectors";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DoctorProfileActions } from "../../store/actions";

function stripHtmlTags(html) {
  return html?.replace(/<[^>]*>?/gm, "");
}

function DoctorsProfile() {
  const { id } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    DoctorsProfileSelector.doctorsProfile
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(DoctorProfileActions.get(id));
  }, [dispatch]);
console.log(id);
console.log(data)
  if(error){
    return <Navigate to="/404"/>
  }

  if (loading) {
    return (
      <div className="container">
        <div className="mainDiv">
          <p>Loading...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="doctors_profile">
      <div className="doctors_prof_fl">
        <div className="container">
          <div className="doc_profils_block">
            <div className="doctors_profils_list">
              <a href="#" className="profil_id">{t("records.doctorsTx")} &#62;</a>
              <a href="#">
                {i18n.language === "ru"
                  ? data?.user_categories?.[0]?.category.title.ru
                  : data?.user_categories?.[0]?.category.title.ro}
                &#62;
              </a>
              <a href="#">{t("records.doctorsProfile")} &#62;</a>
            </div>
            <div className="doctors_profils_block_headers">
              <div className="doctors_prof_img">
                <img
                  className="images_profil_headers"
                  src={data?.profile_image}
                  alt="Doctors img"
                />
              </div>
              <div className="doctors_prof_name">
                <h3>
                  {data?.first_name} {data?.last_name}
                </h3>
                <p>
                  {i18n.language === "ru"
                    ? data?.user_categories?.[0]?.category.description.ru
                    : data?.user_categories?.[0]?.category.description.ro}
                </p>
                <p>
                  {new Date().getFullYear() -
                    data?.doctor_details?.excperience_start_year}
                  {t("records.yearsExperience")}
                </p>
              </div>
              <div className="profil_bl_headers_price">
                <p>
                  {data?.doctor_details?.price}
                  <img src={rubli} alt="RUB" />
                  {t("records.consultation")}
                </p>
                <p>
                  {data?.doctor_details?.consultation_duration}
                  {t("records.minutes")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="doctor_profil_block_desc">
        <div className="container">
          <div className="doctor_profil_block_desc_b1">
            <img src={appcalendar} alt=""/>
            <h3>{t("records.nearestentry")}</h3>
            <p>{data?.near_data}</p>
          </div>
          <div className="doctor_profil_block_desc_b1">
            <img src={mortarboard} alt=""/>
            <h3>{t("records.education")}</h3>
            <p>{stripHtmlTags(data?.doctor_details?.education)}</p>
          </div>
          <div className="doctor_profil_block_desc_b1">
            <img src={plus} alt="" />
            <h3>{t("records.specializes")}</h3>
            <p>
              {i18n.language === "ru"
               ? stripHtmlTags( data?.user_categories?.[0]?.category?.full_description.ru)
                : data?.user_categories?.[0]?.category?.full_description.ro}
            </p>
          </div>
          <div className="doctor_profil_block_desc_b1">
            <img src={roupe} alt="" />
            <h3>{t("records.additionally")}</h3>
            <p>{data?.city}</p>
            <p>code:{data?.country_code?.code}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsProfile;
