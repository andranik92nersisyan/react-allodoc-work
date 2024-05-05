import Main from "../../components/main/Main";
import Article from "../../components/article/Aricle";
import DoctorsStatus from "../../components/sections/DoctorStatus";

function Home() {
  return (
    <div className="wrapper">
      <Main />
      <Article />
      <DoctorsStatus />
    </div>
  );
}

export default Home;
