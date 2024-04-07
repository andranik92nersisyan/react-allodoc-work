import Menu from "./menu";
import "./header.css";
import Main from "../Main/main";
import Article from "../Article/aricle";
import Section from "../Sections/section";

function Headers({ setTranslation }) {
  return (
    <>
      <Menu setTranslation={setTranslation} />
      <Main setTranslationMain={setTranslation}/>
      <Article setTranslationArticle={setTranslation}/>
      <Section />
    </>
  );
}

export default Headers;
