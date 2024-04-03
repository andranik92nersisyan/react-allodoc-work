import "../Headers/header.css";
import mainimages from '../../Images/docimg.PNG'

function Main() {
  return (
    <main>
      <div className="container">
        <div className="mainBlock">
          <div className="mainBlock_one">
            <h2 className="mainBlock_one_title">
              Онлайн консультации от врачей специалистов 24/7
            </h2>
            <p className="mainBlock_one_text">
              Проконсультируйтесь <b>сейчас</b> или по{" "}
              <b>предварительной записи</b> со своего
              компьютера или c помощью нашего приложения, доступного в
              <cite>App Store</cite> и <cite>Google Play</cite>
            </p>
            <div className="btn_main">
              <button className="btn_1">Записаться</button>
              <button className="btn_2">Как это работает?</button>
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
