import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./section.css";
import calendar from "../../Images/calendar.png";
import clock from "../../Images/clock.png";
import maskgroup from "../../Images/user_img.png";
import videocamera from "../../Images/video-camera.png";

function Sectiondoctrs({ users }) {
  console.log(users, "aaaa");

  return (
    <div className="section-block">
      {users?.map((user) => {
        return (
          <div className="section_fl">
            <div className="block-1">
              <div className="data-block">
                <div className="section_data_mg">
                  <img src={calendar} alt="calendar" />
                  <span>{user.date}</span>
                </div>
                <div className="section_data_mg">
                  <img src={clock} alt="clock" />
                  <span>{user.time}</span>
                </div>
                <div className="section_data_mg">
                  <img src={videocamera} alt="videocamera" />
                  <span className="call">{user.contacts[0]}</span>
                </div>
              </div>
              <img src={maskgroup} alt="maskgroup" />
              <div className="block-title">
                <h4>{user.name}</h4>
                <span>{user.profession}</span>
                <p>{user.seniority}</p>
              </div>
            </div>
            <div className="block-2">
              <button className="section_btn_1">{user.state[0]}</button>
              <Link className="section_btn_2" href="" to={`/user/${user.id}`}>
                Посмотреть запись
              </Link>
              <button className="section_btn_3">Посмотреть постановление</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Sectiondoctrs;
