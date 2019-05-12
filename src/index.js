import React from "react";
import ReactDOM from "react-dom";
import CatPicture from "./CatPicture";
import Logo from "./Logo";
import Footer from "./Footer"

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div style = {{height:"20px"}}></div>
      <Logo />
      <CatPicture />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
