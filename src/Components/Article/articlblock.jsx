import { useContext } from "react";
import "../Headers/header.css";
import { TranslationContext } from "../../Page/Home/home";

function Signup() {
  const translate = useContext(TranslationContext);
  return (
    <>
      <div className="article-text">
        <h2>{translate.articleItem.title}</h2>
        <span>{translate.articleItem.titleSpan}</span>
        <ul className="article-list-style">
          <li>{translate.articleItem.descriptionFirst}</li>
          <li>{translate.articleItem.descriptionSecond}</li>
          <li>{translate.articleItem.descriptionThird}</li>
        </ul>
        <a href="#" className="article-btn">
          {translate.articleItem.article_btn}
        </a>
      </div>
    </>
  );
}

export default Signup;
