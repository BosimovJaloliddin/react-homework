import React from "react";
import { Route, Routes } from "react-router-dom";
import { componentPath } from "../utils";

const Root = () => {
  return (
    <Routes>
      {componentPath.map((v) => (
        <Route key={v.id} path={v.pathname} element={v.element} />
      ))}
    </Routes>
  );
};

export default Root;
