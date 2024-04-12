import React, { useContext, useEffect, useState } from "react";
import Sectiondoctrs from "./sectionblock";
import { TranslationContext } from "../../App";
import "./section.css";
function Section() {
  const { users } = useContext(TranslationContext);
  const [usersState, setUsersState] = useState(users);

  return (
    <section>
      <div className="container">
        <div className="btn">
          <button>мои записи</button>
          <div className="btn-link">
            <button
              onClick={() =>
                setUsersState(() =>
                  users.filter((user) => user.seniorityCount < 5)
                )
              }
            >
              Предстоящие
            </button>
            <button
              onClick={() =>
                setUsersState(() =>
                  users.filter((user) => user.seniorityCount > 5)
                )
              }
            >
              Прошедшие
            </button>
            <button href="">Отмененные</button>
          </div>
        </div>
        <Sectiondoctrs users={usersState} />
      </div>
    </section>
  );
}

export default Section;
