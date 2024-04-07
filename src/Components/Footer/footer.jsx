import React from "react";
import appStoreBadge from "../../Images/appStoreBadge.png";
import facebook from "../../Images/facebook.png";
import footerLgo from "../../Images/footerLgo.png";
import googlPlay from "../../Images/googlPlay.png";
import instagram from "../../Images/instagram.png";
import youtube from "../../Images/youtube.png";
import phoneCall from "../../Images/phoneCall.png";
import location from "../../Images/location.png";
import email from "../../Images/@email.png";
import clock2 from "../../Images/clock2.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer-logo">
            <img src={footerLgo} alt="footer-logo" />
          </div>
          <div className="footer_link"> 
            <p>
              Онлай- консульации специалистов врачей, то что предлагает данный сервис.
              <br />В нашем веб и мобильном приложении вы найдете врачей экспертов,
              которые окажут вам персонализированную помощь онлайн 24/7
            </p>
            <div className="footer_social">
              <a href="https://www.instagram.com/allodoc/" target="_blank">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/allodoc/" target="_blank">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.youtube.com/allodoc/" target="_blank">
                <img src={youtube} alt="youtube" />
              </a>
            </div>
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.allodoc"target="_blank">
                <img src={googlPlay} alt="googlPlay" />
              </a>
              <a href="https://apps.apple.com/ru/app/allodoc/id1543443404"target="_blank">
                <img src={appStoreBadge} alt="appStoreBadge" />
              </a>
            </div>
          </div>
          <div className="footer-menu">
            <ul>
              <li>
                <a href="#home">Как пользоваться</a>
              </li>
              <li>
                <a href="#about">FAQ (ответы на вопросы)</a>
              </li>
              <li>
                <a href="#services">Для врачей</a>
              </li>
              <li>
                <a href="#portfolio">О сервисе</a>
              </li>
              <li>
                <a href="#contact">Контакты</a>
              </li>
              <li>
                <a href="#contact">Пользовательское соглашение</a>
              </li>
            </ul>
          </div>
          <div className="footer-copyright">
          <ul>
            <li>
              <div className="footer_link-icons">
                <img src={email} alt="user" />
                <p>allodoc@mail.com</p>
              </div>
            </li>
            <li>
              <div className="footer_link-icons">
                <img src={location} alt="creditcard" />
                <p>г. Москва. ул, Ленина 54, офис 51</p>
              </div>
            </li>
            <li>
              <div className="footer_link-icons">
                <img src={clock2} alt="help" />
                <p>Пн-Вс с 09:00 до 18:00</p>
              </div>
            </li>
            <li>
              <div className="footer_link-icons">
                <img src={phoneCall} alt="logout1" />
                <p>8 800 555 35 35</p>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </div>
     &copy;
    </footer>
  );
}
