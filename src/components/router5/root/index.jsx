import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Notfound from "../components/Notfound";

const RouterRoot = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path={"/home"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/info"} component={Info} />
      <Route path={"*"}>
        <Notfound />
      </Route>
      <Route exact path={"/"}>
        <Redirect to={"home"} />
      </Route>
    </BrowserRouter>
  );
};
export default RouterRoot;
