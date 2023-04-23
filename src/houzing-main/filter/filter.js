import React from "react";
import "../filter/filter.css";
import home from "../media/home.png";
import status from "../media/status.png";
import price from "../media/price.png";
import setting from "../media/setting.png";
import search from "../media/search.png";

class Filter extends React.Component {
  render() {
    const filterInfo = () => {
      let blockF = document.querySelector(".block-filter");
      blockF.classList.toggle("none");
    };
    return (
      <>
        <div className="wrap-filter">
          <div className="filter-item1">
            <img className="img-home" src={home} alt="home" />
            <input
              type="text"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
            />
          </div>
          <div className="filter-item2">
            <img src={status} alt="img" />
            <p>status</p>
          </div>
          <div className="filter-item3">
            <img src={price} alt="img" />
            <p>price</p>
          </div>
          <div className="filter-item4">
            <img src={setting} alt="img" />
            <p>advanced</p>
          </div>
          <div onClick={filterInfo} className="filter-item5">
            <img src={search} alt="img" />
            <p className="white">search</p>

            <div className="block-filter none">
              <div className="block-address">
                <h4>Address</h4>
                <div className="address-inputs">
                  <input type="text" placeholder="country" />
                  <input type="text" placeholder="region" />
                  <input type="text" placeholder="city" />
                  <input type="number" placeholder="zip code" />
                </div>
              </div>
              <div className="block-apartmetn">
                <h4>Appartment info</h4>
                <div className="apartmetn-inputs">
                  <input type="number" placeholder="rooms" />
                  <input type="number" placeholder="size" />
                  <input type="text" placeholder="sort" />
                </div>
              </div>
              <div className="block-price">
                <h4>price</h4>
                <div className="price-inputs">
                  <input type="number" placeholder="min price" />
                  <input type="number" placeholder="max price" />
                </div>
              </div>
              <div className="block-buttons">
                <button>cencel</button>
                <button>submit</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Filter;
