import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./section.css";
import calendar from "../../Images/calendar.png";
import clock from "../../Images/clock.png";
import videocamera from "../../Images/video-camera.png";
import maskgroup from "../../Images/doc1.png";
import angelaselivanov from "../../Images/doc2.png";
import dfgdfgd from "../../Images/doc3.jpg";
import fotomea from "../../Images/doc4.jpg";
import fotoprofil from "../../Images/doc5.png";
import gherman from "../../Images/doc6.png";
import irinatriboi from "../../Images/doc7.png";
import liliamin from "../../Images/doc8.png";
import vasilievamin from "../../Images/doc9.png";
import ludmilapng from "../../Images/doc10.png";
import { TranslationContext } from "../../App";

function Sectiondoctrs({ users }) {
  console.log(users, "aaaa");
  console.log(users, "asdff");
  const t = useContext(TranslationContext);

  return (
    <div className="section-block">
      {users?.map((user) => {
        return (
          <div className="section_fl">
            <div className="block-1">
              <div className="section_data_mg">
                <img src={calendar} alt="calendar" />
                <span className="call">{user.date}</span>
                <img src={clock} alt="clock" />
                <span className="call">{user.time}</span>
                <img
                  className="data_img_camera"
                  src={videocamera}
                  alt="videocamera"
                />
                <span className="call">{user.contacts[0]}</span>
              </div>
              <div className="block-name-img">
                <div>
                  <img
                    className="redius"
                    src={require(`../../Images/${user.userImg}`)}
                    alt=""
                  />
                </div>
                <div className="block-top">
                  <h4>{user.name}</h4>
                  <span>{user.profession}</span>
                  <p>{user.seniority}</p>
                </div>
              </div>
            </div>

            <div className="block-2">
              <button className="section_btn_1">{user.state[0]}</button>
              <Link className="section_btn_2" href="" to={`/user/${user.id}`}>
                Посмотреть запись
              </Link>
              <button className="section_btn_3">
                Посмотреть постановление
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Sectiondoctrs;
