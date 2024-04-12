import React, {  useContext } from "react";
import Main from "../../Components/Main/main";
import Article from "../../Components/Article/aricle";
import Section from "../../Components/Sections/section";
import { TranslationContext } from "../../App";
// import { Link } from "react-router-dom";

function Home() {
  const t = useContext(TranslationContext);

  return (
    <div className="wrapper">
      <Main setTranslationMain={t.setTranslation}/>
      <Article setTranslationArticle={t.setTranslation}/>
      <Section />
    </div>
  );
}

export default Home;
