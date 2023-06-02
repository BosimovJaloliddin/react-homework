import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Notfound from "../components/Notfound";

const RouterRoot6 = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Navbar} />
        <Route path="/home" component={Navbar} />
        <Route path="/contact" component={Navbar} />
        <Route path="/info" component={Navbar} />
      </Switch>
      <Switch>
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
      </Switch>
    </BrowserRouter>
  );
};
export default RouterRoot6;
