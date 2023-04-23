import React from "react";
import "./recom.css";

class DataRecom extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <div className="recom-item">
          <div className="recom-item_images">
            <img className="recom-item_image" src={data.img} alt="image" />
            <div className="recom-status1">FEATURED</div>
            <div className="recom-status2">FOR SALE</div>
            <img
              className="recom-item_contact"
              src={require("../media/Ellipse 11.png")}
              alt="image"
            />
          </div>
          <div className="recom-item_info">
            <h4 className="recom-item_title">New Apartment Nice Wiew</h4>
            <p className="recom-item_subtitle">Quincy St, Brooklyn, NY, USA</p>
            <div className="recom-info-items">
              <div className="recom-info-item">
                <img src={require("../media/recom-div.png")} alt="sleep" />
                <p>4 beds</p>
              </div>
              <div className="recom-info-item">
                <img src={require("../media/recom-van.png")} alt="van" />
                <p>5 Baths</p>
              </div>
              <div className="recom-info-item">
                <img src={require("../media/recom-car.png")} alt="car" />
                <p>1 Garage</p>
              </div>
              <div className="recom-info-item">
                <img src={require("../media/recom-zin.png")} alt="zin" />
                <p>1200 Sq Ft</p>
              </div>
            </div>
            <hr />
            <div className="recom-salarys">
              <div className="recom-salary">
                <p>$2,800/mo</p>
                <h3>$7,500/mo</h3>
              </div>
              <div className="recom-liks">
                <img src={require("../media/recom-size.png")} alt="size" />
                <img src={require("../media/recom-like.png")} alt="like" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default DataRecom;
