import React from "react";
import "./table.css";

class DataTable extends React.Component {
  render() {
    const { id, country, region, city, zipCode, rooms, size, sort, price } =
      this.props.data;
    return (
      <>
        <tr>
          <td>{id}</td>
          <td>{country}</td>
          <td>{region}</td>
          <td>{city}</td>
          <td>+{zipCode}</td>
          <td>{rooms}</td>
          <td>
            {size}m<sup>2</sup>
          </td>
          <td>{sort}</td>
          <td>{price}$</td>
        </tr>
      </>
    );
  }
}
export default DataTable;
