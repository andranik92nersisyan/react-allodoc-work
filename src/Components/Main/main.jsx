import "../Headers/header.css";
import mainimages from "../../Images/docimg.PNG";
import { TranslationContext } from "../../Page/Home/home";
import { useContext } from "react";

function Main() {
  const translation = useContext(TranslationContext);

  return (
    <main>
      <div className="container">
        <div className="mainBlock">
          <div className="mainBlock_one">
            <h2 className="mainBlock_one_title">
              {translation.mainItem.title}
            </h2>
            <p className="mainBlock_one_text">
              {translation.mainItem.mainDescription.firstSection}{" "}
              <b>{translation.mainItem.mainDescription.secondSection}</b>{" "}
              {translation.mainItem.mainDescription.thirdSection}
              <b> {translation.mainItem.mainDescription.fourthSection}</b>
              {translation.mainItem.mainDescription.sixthSection}
              <cite>
                {translation.mainItem.mainDescription.seventhSection}
              </cite>{" "}
              {translation.mainItem.mainDescription.eighthSection}
              <cite>{translation.mainItem.mainDescription.ninthSection}</cite>
            </p>
            <div className="btn_main">
              <button className="btn_1">{translation.mainItem.btn}</button>
              <button className="btn_2">{translation.mainItem.btnSecond}?</button>
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
