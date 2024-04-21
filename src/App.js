import React, { useState, createContext, useParams } from "react";
import "./App.css";
import Balance from "./Page/Balance/balance";
import Home from "./Page/Home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import Menu from "./Components/Headers/menu";
import UserInfo from "./Page/Contact/user_info";
import {creatStore} from "redux"
export const TranslationContext = createContext();

function reducer (state,action) {
  const {type,payload} = action;
  switch (type) {
    case "SET_LANGUAGE":
      return {
       ...state,
        language:payload
      }
    default:
      return state
  }
}

const store = creatStore(reducer);

store.subscribe(() => {
  console.log(store.getState())
})
setInterval(() => {
  store.dispatch({
    type:"SET_LANGUAGE",
  })
},2000)
function App() {

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
