import React, { useState, useEffect } from "react";
import { getCatPhoto } from "./api";

import Spinner from "./Spinner";

import "./cats.css";

function CatPicture() {
  const [loading, setLoading] = useState(true)
  const [catImage, setCatImage] = useState(null)
  const [catImageisShown, setCatImageisShown] = useState(true)

  function getCatPicture() {
    if (catImage) {
      hideCatImage();
      setTimeout(() => {
        setCatImage(null);
      }, 100);
    }
    setLoading(true);
    (async () => {
      const catPic = await getCatPhoto();
      setCatImage(catPic[0].url);
      setTimeout(() => {
        setLoading(false);
        showCatImage();
      }, 1200);
    })();
  };

  function showCatImage() {
    setCatImageisShown(true)
  };

  function hideCatImage() {
    setCatImageisShown(false)
  };

  useEffect(getCatPicture,[])
  
  return (
    <React.Fragment>
      <div id="catContainer">
        {catImage && (
          <img
            src={catImage}
            onLoad={showCatImage}
            alt="Cat"
            className={"catImage" + (catImageisShown ? " catImage--visible" : "")}
          />
        )}
        {loading && <Spinner />}
        <button className="newCatButton" onClick={getCatPicture}>
          New cat
        </button>
      </div>
    </React.Fragment>
  );
}

export default CatPicture;
