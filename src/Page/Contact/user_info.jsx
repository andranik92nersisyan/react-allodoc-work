// import { TranslationContext } from "../../App";
import { useParams } from "react-router-dom";
import "./style.css";

export default function UserInfo() {
  // const { users } = useContext(TranslationContext);
  let {users, id } = useParams();

  return (
    <div className="mainDiv">
      <h1>{users[id].name}</h1>
    </div>
  );
}
