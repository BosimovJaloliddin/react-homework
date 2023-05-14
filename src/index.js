import React from "react";
import ReactDOM from "react-dom/client";
// import Homeworks from "./components/homeworks/homeworks";
import "./style.css";
// import Test from "./components/testing";
import Crud from "./components/crud/crud";
import Table from "./components/table/table";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Homeworks /> */}
    {/* <Test /> */}
    <Crud />
    <Table />
  </React.StrictMode>
);
