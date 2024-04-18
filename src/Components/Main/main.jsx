import "../Headers/header.css";
import mainimages from "../../Images/docimg.PNG";
import { useTranslation } from "react-i18next";
function Main() {
  const { t } = useTranslation();

  return (
    <main>
      <div className="container">
        <div className="mainBlock">
          <div className="mainBlock_one">
            <h2 className="mainBlock_one_title">{t("mainItem.title")}</h2>
            <p className="mainBlock_one_text">
              {t("mainItem.mainDescription.firstSection")}{" "}
              <b>{t("mainItem.mainDescription.secondSection")}</b>{" "}
              {t("mainItem.mainDescription.thirdSection")}
              <b> {t("mainItem.mainDescription.fourthSection")}</b>
              {t("mainItem.mainDescription.sixthSection")}
              <cite>{t("mainItem.mainDescription.seventhSection")}</cite>{" "}
              {t("mainItem.mainDescription.eighthSection")}
              <cite>{t("mainItem.mainDescription.ninthSection")}</cite>
            </p>
            <div className="btn_main">
              <button className="btn_1">{t("mainItem.btn")}</button>
              <button className="btn_2">{t("mainItem.btnSecond")}?</button>
            </div>
          </div>
          <div className="mainblock_two">
            <img src={mainimages} alt="mainimg" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
