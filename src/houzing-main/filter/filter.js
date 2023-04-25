import React from "react";
import DataFilter from "./dataFilter";
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
      let table = document.querySelector(".table");
      blockF.classList.toggle("none");
      table.classList.add("none");
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
          </div>
          <DataFilter />
        </div>
      </>
    );
  }
}
export default Filter;
