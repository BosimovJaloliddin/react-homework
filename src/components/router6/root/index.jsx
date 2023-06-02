import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Info from "../components/Info";
import Notfound from "../components/Notfound";
import Navbar from "../components/Navbar";

const RouterRoot6 = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(typeof token, token);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route exact path={"/"} element={<Navigate to={"/home"} />} />
          <Route
            path={"/home"}
            element={token ? <Home /> : <Navigate to="/about" />}
          />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/info"} element={<Info />} />
          <Route path={"*"} element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterRoot6;
