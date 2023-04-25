import React from "react";
import DataTable from "./dataTable";
import BazaData from "./bazaTable";
import "./table.css";

class Table extends React.Component {
  render() {
    const {
      country,
      city,
      region,
      zipCode,
      rooms,
      size,
      sort,
      minPrice,
      maxPrice,
    } = this.props.data; //dataFilter
    const delTable = () => {
      let delTable = document.querySelector(".wrap-table");
      delTable.classList.add("none");
    };
    return (
      <div className="wrapper">
        <div className="wrap-table">
          <table>
            <tr className="table-title">
              <th>ID</th>
              <th>COUNTRY</th>
              <th>REGION</th>
              <th>CITY</th>
              <th>ZIP CODE</th>
              <th>ROOMS</th>
              <th>SIZE</th>
              <th>SORT</th>
              <th>PRICE</th>
            </tr>

            {BazaData.map((v) => {
              if (
                v.rooms == +rooms &&
                v.country.includes(country) &&
                v.city.includes(city)
              ) {
                return <DataTable data={v} />;
              } else if (
                rooms == "" &&
                country == "" &&
                city == "" &&
                region == "" &&
                zipCode == "" &&
                rooms == 0 &&
                size == 0 &&
                sort == "" &&
                minPrice == 0 &&
                maxPrice == 0
              ) {
                return <DataTable data={v} />;
              }
            })}
            <button onClick={delTable} className="close">
              Close
            </button>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
