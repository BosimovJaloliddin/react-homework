import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-item">
          <img src="./media/nav-location.png" alt="location" />
          <img src="./media/Houzing.png" alt="logo" />
        </div>
        <div className="navbar-item">
          <li>home</li>
          <li>proporties</li>
          <li>contacts</li>
        </div>
        <div className="navbar-item">
          <img src="../media/nav-con.png" alt="contact" />
        </div>
      </div>
    );
  }
}
export default Navbar;
