import { useContext } from "react";
import "../Headers/header.css";
import { TranslationContext } from "../../App";

function Signup({}) {
  const t = useContext(TranslationContext);
  return (
    <>
      <div className="article-text">
        <h2>{t.articleItem.title}</h2>
        <span>{t.articleItem.titleSpan}</span>
        <ul className="article-list-style">
          <li>{t.articleItem.descriptionFirst}</li>
          <li>{t.articleItem.descriptionSecond}</li>
          <li>{t.articleItem.descriptionThird}</li>
        </ul>
        <a href="#" className="article-btn">
          {t.articleItem.article_btn}
        </a>
      </div>
    </>
  );
}

export default Signup;
