import React from "react";

class DataT extends React.Component {
  render() {
    const { id, name, age, address, status, nicname, univ, job, edit } =
      this.props.dataT;
    const tableEdit = (e) => {
      let tableMenu = document.querySelector(".table-menu");
      tableMenu.classList.add("none");
      console.log(e);
    };
    return (
      <>
        <tr className="table-menu">
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{address}</td>
          <td>{status}</td>
          <td>{nicname}</td>
          <td>{univ}</td>
          <td>{job}</td>
          <td onClick={tableEdit} className="table-edit">
            {edit}
          </td>
        </tr>
      </>
    );
  }
}

export default DataT;
