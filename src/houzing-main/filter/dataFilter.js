import React from "react";
import Table from "../table/table";
import "../filter/filter.css";

class DataFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      city: "",
      region: "",
      zipCode: "",
      rooms: 0,
      size: 0,
      sort: "",
      minPrice: 0,
      maxPrice: 0,
    };
  }
  render() {
    const pushInfo = () => {
      let blockF = document.querySelector(".block-filter");
      let table = document.querySelector(".table");
      let delTable = document.querySelector(".wrap-table");
      blockF.classList.add("none");
      table.classList.remove("none");
      delTable.classList.remove("none");
    };
    const noPushInfo = () => {
      let blockF = document.querySelector(".block-filter");
      blockF.classList.add("none");
    };
    const getAddressCountry = (e) => {
      this.setState({ country: (this.state.country = e.target.value) });
    };
    const getAddressRegion = (e) => {
      this.setState({ region: (this.state.region = e.target.value) });
    };
    const getAddressCity = (e) => {
      this.setState({ city: (this.state.city = e.target.value) });
    };
    const getAddressCode = (e) => {
      this.setState({ zipCode: (this.state.zipCode = e.target.value) });
    };
    const getApartmentRooms = (e) => {
      this.setState({ rooms: (this.state.rooms = e.target.value) });
    };
    const getApartmentSize = (e) => {
      this.setState({ size: (this.state.size = e.target.value) });
    };
    const getApartmentSort = (e) => {
      this.setState({ sort: (this.state.sort = e.target.value) });
    };
    const getPriceMin = (e) => {
      this.setState({ minPrice: (this.state.minPrice = e.target.value) });
    };
    const getPriceMax = (e) => {
      this.setState({ maxPrice: (this.state.maxPrice = e.target.value) });
    };
    return (
      <>
        <div className="block-filter none">
          <div className="block-address">
            <h4>Address</h4>
            <div className="address-inputs">
              <input
                onChange={getAddressCountry}
                className="input1"
                type="text"
                placeholder="country *"
              />
              <input
                onChange={getAddressRegion}
                type="text"
                placeholder="region"
              />
              <input
                onChange={getAddressCity}
                type="text"
                placeholder="city *"
              />
              <input
                onChange={getAddressCode}
                type="number"
                placeholder="zip code"
              />
            </div>
          </div>
          <div className="block-apartmetn">
            <h4>Appartment info</h4>
            <div className="apartmetn-inputs">
              <input
                onChange={getApartmentRooms}
                type="number"
                placeholder="rooms *"
              />
              <input
                onChange={getApartmentSize}
                type="number"
                placeholder="size"
              />
              <input
                onChange={getApartmentSort}
                type="text"
                placeholder="sort"
              />
            </div>
          </div>
          <div className="block-price">
            <h4>Price</h4>
            <div className="price-inputs">
              <input
                onChange={getPriceMin}
                type="number"
                placeholder="min price"
              />
              <input
                onChange={getPriceMax}
                type="number"
                placeholder="max price"
              />
            </div>
          </div>
          <div className="block-buttons">
            <button onClick={noPushInfo}>cencel</button>
            <button onClick={pushInfo}>submit</button>
          </div>
        </div>
        <div className="table none">
          <Table data={this.state} />
        </div>
      </>
    );
  }
}

export default DataFilter;
