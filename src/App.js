import { Route, Routes } from "react-router-dom";
import "./App.css";
import Balance from "./page/balance/Balance";
import Home from "./page/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Menu from "./components/headers/Menu.jsx";
import DoctorsProfile from "./page/doctorsProfils/DoctorsProfil.jsx";
import NodeFound from "./page/404nodefound/NodeFound.jsx";


function App() {

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/doctorsProfils/:id" element={<DoctorsProfile />} />
        <Route path="*" element={<NodeFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
