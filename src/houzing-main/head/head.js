import React from "react";
import "./head.css";

class Head extends React.Component {
  render() {
    return (
      <div className="wrap-head">
        <div className="head">
          <img
            className="head-arrow1"
            src={require("../media/head-arrow.png")}
            alt="arrow"
          />
          <div className="head-info">
            <h1 className="title">Skyper Pool Partment</h1>
            <h3 className="subtitle">112 Glenwood Ave Hyde Park, Boston, MA</h3>
            <div className="info-items">
              <div className="info-item">
                <img src={require("../media/head-sleep.png")} alt="sleep" />
                <p>4 beds</p>
              </div>
              <div className="info-item">
                <img src={require("../media/head-vanna.png")} alt="van" />
                <p>5 Baths</p>
              </div>
              <div className="info-item">
                <img src={require("../media/head-car.png")} alt="car" />
                <p>1 Garage</p>
              </div>
              <div className="info-item">
                <img src={require("../media/head-zina.png")} alt="zin" />
                <p>1200 Sq Ft</p>
              </div>
            </div>
            <h3 className="salary">$5,250/mo</h3>
            <div className="button">Read more</div>
          </div>
          <img
            className="head-arrow2"
            src={require("../media/head-arrow.png")}
            alt="arrow"
          />
        </div>
      </div>
    );
  }
}
export default Head;
