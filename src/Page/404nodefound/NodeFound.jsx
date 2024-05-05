import "./Notfound.css"
import notfound from "../../Images/notfound.png"
import { Link } from "react-router-dom";
function NodeFound() {
    return (
        <div className="notfound">
            <img src={notfound} alt="notfound" />
            <Link to="/home" className="link_found" href="/">Back to Home 	&#128073;</Link>
        </div>
    )
}

export default NodeFound;