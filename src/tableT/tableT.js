import React from "react";
import "./tableT.css";
import DataT from "./dataT";

let obj = {
  id: 1,
  name: "Jaloliddin",
  age: 24,
  address: "Sirdaryo,Uzbeliston",
  status: "student",
  nicname: "Umar",
  univ: "TATU",
  job: "devoloper",
  edit: "edit",
};

class TableH extends React.Component {
  render() {
    return (
      <div className="wrap-tableT">
        <table className="tableT">
          <tr className="table-title">
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>ADDRESS</th>
            <th>STATUS</th>
            <th>NICNAME</th>
            <th>UNIV</th>
            <th>JOB</th>
            <th>EDIT</th>
          </tr>
          <DataT dataT={obj} />
          <DataT dataT={obj} />
          <DataT dataT={obj} />
        </table>
      </div>
    );
  }
}
export default TableH;
