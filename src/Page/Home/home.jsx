import React, { useState, createContext } from "react";
import Footer from "../../Components/Footer/footer";
import Headers from "../../Components/Headers/header";
import translationRu from "../../Components/Data/translationsRu.json";
// import { Link } from "react-router-dom";
export const TranslationContext = createContext();

function Home() {
  const [translation, setTranslation] = useState(translationRu);

  return (
    <div className="wrapper">
      <TranslationContext.Provider value={translation}>
        <Headers setTranslation={setTranslation} />
        <Footer />
      </TranslationContext.Provider>
    </div>
  );
}

export default Home;
