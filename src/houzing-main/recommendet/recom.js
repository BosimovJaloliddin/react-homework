import React from "react";
import "./recom.css";
import DataRecom from "./dataRecom";
import recom1 from "../media/recom-1.png";
import recom3 from "../media/recom-3.png";
import recom4 from "../media/recom-4.png";

class Recom extends React.Component {
  constructor() {
    super();
    this.state = {
      lef: [
        <DataRecom data={{ img: recom1 }} />,
        <DataRecom data={{ img: recom3 }} />,
        <DataRecom data={{ img: recom4 }} />,
        <DataRecom data={{ img: recom3 }} />,
        <DataRecom data={{ img: recom4 }} />,
        <DataRecom data={{ img: recom1 }} />,
        <DataRecom data={{ img: recom4 }} />,
        <DataRecom data={{ img: recom3 }} />,
        <DataRecom data={{ img: recom4 }} />,
        <DataRecom data={{ img: recom1 }} />,
      ],
      idx: 3,
    };
  }
  render() {
    const goLeft = () => {
      this.setState({ idx: this.state.idx + 1 });
    };
    const goRight = () => {
      this.setState({ idx: this.state.idx - 1 });
    };

    return (
      <div className="wrap-recom">
        <h1 className="recom-title">recommended</h1>
        <p className="recom-subtitle">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
        <div className="recom-items">
          <img
            onClick={goRight}
            className="recom-items_img1"
            src={require("../media/recom-arrow.png")}
            alt="arrow"
          />
          <div className="recom-carusel">
            {this.state.lef.map((v, i) => {
              if (this.state.idx > 6 || this.state.idx < 0) {
                this.state.idx = 0;
              }
              if (this.state.idx < i) return v;
            })}
          </div>
          <img
            onClick={goLeft}
            className="recom-items_img2"
            src={require("../media/recom-arrow.png")}
            alt="arrow"
          />
        </div>
      </div>
    );
  }
}
export default Recom;
