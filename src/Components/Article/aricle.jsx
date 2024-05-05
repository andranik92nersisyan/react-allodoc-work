import objects from "../../Images/objects.png";
import Signup from "./Articlblock";
function Article() {
  return (
    <article>
      <div className="container">
        <div className="article">
          <div className="article-fl">
            <div className="article-img">
              <img src={objects} alt="objects-img" />
            </div>
            <Signup />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;
