import React from "react";
import ReactDOM from "react-dom";
import CatPicture from "./CatPicture";
import Logo from "./Logo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Logo />
      <CatPicture />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
