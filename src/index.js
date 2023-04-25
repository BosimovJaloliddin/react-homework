import React from "react";
import ReactDOM from "react-dom/client";
import App from "./houzing-main/App";
import TableH from "./tableT/tableT";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <TableH />
  </React.StrictMode>
);
