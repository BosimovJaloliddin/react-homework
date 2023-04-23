import React from "react";
import "./navbar.css";
import logo from "../media/logo.png";
import navCon from "../media/nav-con.png";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-background">
        <div className="navbar">
          <div className="navbar-item">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-item">
            <li>home</li>
            <li>proporties</li>
            <li>contacts</li>
          </div>
          <div className="navbar-item">
            <img src={navCon} alt="contact" />
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
