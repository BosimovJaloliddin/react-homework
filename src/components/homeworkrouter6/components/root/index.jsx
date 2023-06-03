import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map((v) => (
            <Route key={v.id} path={v.pathname} element={v.element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};

export default Root;
