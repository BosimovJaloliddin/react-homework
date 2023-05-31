import React from "react";
import ReactDOM from "react-dom/client";
// import Fetch from "./components/fetch";
// import Homeworks from "./components/homeworks/homeworks";
import "./style.css";
// import Test from "./components/testing";
// import Crud from "./components/crud/crud";
// import Table from "./components/table/table";
// import Styled from "./components/styled/styled";
// import Reduce from "./components/useReduce/reduce";
// import ContextAPI from "./components/contextAPI/root";
// import Fetching from "./components/fetch";
import Root from "./components/axios";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <Homeworks /> */}
    {/* <Test /> */}
    {/* <Crud /> */}
    {/* <Table /> */}
    {/* <Styled /> */}
    {/* <Reduce /> */}
    {/* <ContextAPI /> */}
    {/* <Fetching /> */}
    <Root />
  </>
);
