import React, {  useContext } from "react";
import Main from "../../Components/Main/main";
import Article from "../../Components/Article/aricle";
import Section from "../../Components/Sections/section";
import { TranslationContext } from "../../App";
// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


function Home() {
  const { t } = useTranslation()

  return (
    <div className="wrapper">
      <Main setTranslationMain={t}/>
      <Article setTranslationArticle={t}/>
      <Section />
    </div>
  );
}

export default Home;
