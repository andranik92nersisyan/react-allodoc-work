import React, { useState, createContext, useParams } from "react";
import "./App.css";
import Balance from "./Page/Balance/balance";
import Home from "./Page/Home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import Menu from "./Components/Headers/menu";
// import translationRu from "./Components/Data/translationsRu.json";
// import translationEn from "./Components/Data/translationsEn.json";
import UserInfo from "./Page/Contact/user_info";
export const TranslationContext = createContext();

function App() {
  // const [translation, setTranslation] = useState(translationRu.ru);

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/user/:id" element={<UserInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
