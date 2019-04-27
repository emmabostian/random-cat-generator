import React, { Component } from "react";
import { getCatPhoto } from "./api";

import Spinner from "./Spinner";

import "./cats.css";

class CatPicture extends Component {
  state = {
    loading: true,
    catImage: null
  };

  getCatPicture = () => {
    if (this.state.catImage) {
      this.hideCatImage();
      setTimeout(() => {
        this.setState({ catImage: null });
      }, 100);
    }
    this.setState({ loading: true });
    (async () => {
      const catPic = await getCatPhoto();
      this.setState({
        catImage: catPic[0].url
      });
      setTimeout(() => {
        this.setState({ loading: false });
        this.showCatImage();
      }, 1200);
    })();
  };

  showCatImage = () => {
    document.querySelector(".catImage").classList.add("catImage--visible");
  };

  hideCatImage = () => {
    document.querySelector(".catImage").classList.remove("catImage--visible");
  };

  componentDidMount() {
    this.getCatPicture();
  }

  render() {
    return (
      <React.Fragment>
        <div id="catWrapper">
        <div id="catContainer">
          {this.state.catImage && (
            <img
            src={this.state.catImage}
            onLoad={this.showCatImage}
            alt="Cat"
            className="catImage"
            />
            )}
          {this.state.loading && <Spinner />}
          <button className="newCatButton" onClick={this.getCatPicture}>
            New cat
          </button>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default CatPicture;
