import React, { useState, useEffect } from "react";
import { getCatPhoto } from "./api";

import Spinner from "./Spinner";

import "./cats.css";

function CatPicture() {
  const [loading, setLoading] = useState(true)
  const [catImage, setCatImage] = useState(null)

  async function getCatPicture() {
    setLoading(true);
    const catPic = await getCatPhoto();
    setCatImage(catPic[0].url);
  };

  function handleOnLoad() {
    setLoading(false)
  }

  useEffect(getCatPicture,[])
  
  return (
    <React.Fragment>
      <div id="catContainer">
        <img
          src={catImage}
          onLoad={handleOnLoad}
          alt="Cat"
          className={"catImage" + (!loading ? " catImage--visible" : "")}
        />
        {loading && <Spinner />}
        <button className="newCatButton" onClick={getCatPicture}>
          New cat
        </button>
      </div>
    </React.Fragment>
  );
}

export default CatPicture;
