import "./App.css";
import Balance from "./Page/Balance/balance";
import Home from "./Page/Home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Headers from "./Components/Headers/header";
import React, { useState, createContext } from "react";
import Footer from "./Components/Footer/footer";
import translationRu from "./Components/Data/translationsRu.json";
export const TranslationContext = createContext();

function App() {
  const [translation, setTranslation] = useState(translationRu);

  return (
  //   <TranslationContext.Provider value={translation}>
  //     <Headers setTranslation={setTranslation} />
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/home" element={<Home />} />
  //         <Route path="/balance" element={<Balance />} />
  //       </Routes>
  //     </BrowserRouter>
  //     <Footer />
  //   </TranslationContext.Provider>
  // );
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/balance" element={<Balance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
