import React, { useContext, useEffect, useState  } from "react";
import Sectiondoctrs from "./sectionblock";
import { TranslationContext } from "../../App";
import "./section.css";
function Section() {
  const { users } = useContext(TranslationContext);
  const [usersState, setUsersState] = useState(users);
  const t = useContext(TranslationContext);

  return (
    <section>
      <div className="container">
        <div className="section_doctor_block">
          <div className="btn">
            <button className="section_btn_one">{t.records.myNotes}</button>
            <div className="btn-link"  style={{ marginTop: '5rem' }}>
              <button
                className="section_btn_onclick"
                onClick={() =>
                  setUsersState(() =>
                    users.filter((user) => user.seniorityCount < 5)
                  )
                }
              >
                {t.records.upcoming}
              </button>
              <button
                className="section_btn_onclick"
                onClick={() =>
                  setUsersState(() =>
                    users.filter((user) => user.seniorityCount > 5)
                  )
                }
              >
                {t.records.past}
              </button>
              <button
                className="section_btn_onclick"
                onClick={() =>
                  setUsersState(() =>
                    users.filter((user) => user.seniorityCount <= 0)
                  )
                }
              >
                {t.records.canceled}
              </button>
            </div>
          </div>
          <Sectiondoctrs users={usersState} />
        </div>
      </div>
    </section>
  );
}

export default Section;
