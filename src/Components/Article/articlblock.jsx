import "../Headers/header.css";
function Signup(){
    return(
        <>
          <div className="article-text">
              <h2>Записаться к врачу</h2>
              <span>Более 1500 врачей и более 50 разных специализаций</span>
              <ul className="article-list-style">
                <li>Прием в удобное для вас время, без визита в клинику</li>
                <li>Врачи с опытом работы более 8 лет</li>
                <li>
                  Понятно объясним причину недуга и дадим подробную рекомендацию
                </li>
              </ul>
              <a href="#" className="article-btn">Записаться</a>
            </div>
        </>
    )
}

export default Signup;