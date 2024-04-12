import React, { useState, createContext, useParams } from "react";
import "./App.css";
import Balance from "./Page/Balance/balance";
import Home from "./Page/Home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import Menu from "./Components/Headers/menu";
import translationRu from "./Components/Data/translationsRu.json";
import UserInfo from "./Page/Contact/user_info";
export const TranslationContext = createContext();

function App() {
  const [translation, setTranslation] = useState(translationRu);
  
  return (
    <div className="App">
      <BrowserRouter>
        <TranslationContext.Provider value={translation}>
          <Menu setTranslation={setTranslation} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/user/:id" element={<UserInfo />}/>
          </Routes>
          <Footer />
        </TranslationContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
