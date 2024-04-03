import Menu from "./menu";
import "./header.css";
import Main from "../Main/main";
import Article from "../Article/aricle";
import Section from "../Sections/section";

function Headers() {
  return (
    <>
      <Menu />
      <Main />
      <Article/>
      <Section/>
    </>
  );
}

export default Headers;
