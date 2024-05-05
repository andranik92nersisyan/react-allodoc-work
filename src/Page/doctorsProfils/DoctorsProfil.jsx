import { useParams } from "react-router-dom";
import i18n from "../../service/i18next.js";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import "../../components/headers/Header.css"
// import { useDispatch } from "react-redux";

function DoctorsProfile() {
  const { id } = useParams();
  const [loadings, setLoadings] = useState(true);
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  // const dispatch = useDispatch();
  // const doctorsPR = useSelector(UserSelector.doctorsProfLiSelector);
  
  // if (loadings) {
  //   return (
  //     <div className="container">
  //       <div className="mainDiv">
  //         <h1>Loading...</h1>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="doctors_profile">
      <div className="doctors_prof_fl">
        <div className="container">
          <div className="doc_profils_block">
            <div className="doctors_profils_list">
              <a href="#" className="profil_id">xcvbn &#62;</a>
              <a href="#">
                {/* {i18n.language === "ru" */}
                  {/* // ? doctorsPR?.user_categories?.[0]?.category.title.user_categories */}
                  {/* // : doctorsPR?.user_categories?.[0]?.category.title.ro} */}
                 &#62;
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1>{[id].name}</h1>
    </div>
  );
}

export default DoctorsProfile;