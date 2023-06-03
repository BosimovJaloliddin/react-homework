import React from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { navbar } from "../utils/navbar";

const Root = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/about");
        }}
      >
        remove token
      </button>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(
            ({ pathname, element, isPrivate }) =>
              !isPrivate && <Route path={pathname} element={element} />
          )}
          {navbar.map(
            ({ pathname, element, isPrivate }) =>
              isPrivate && (
                <Route
                  path={pathname}
                  element={token ? element : <Navigate to={"/about"} />}
                />
              )
          )}
        </Route>
      </Routes>
    </div>
  );
};
export default Root;
