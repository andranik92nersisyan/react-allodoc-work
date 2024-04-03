import "./section.css";
function Section() {
  return (
    <section>
      <div className="container">
      <div className="btn">
                <button>мои записи</button>
                <div className="btn-link">
                    <a href="">Предстоящие</a>
                    <a href="">Прошедшие</a>
                    <a href="">Отмененные</a>
                </div>
            </div>
      </div>
    </section>
  );
}

export default Section;
