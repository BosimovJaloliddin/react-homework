import React from "react";
import Navbar from "./navbar/navbar";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
      </div>
    );
  }
}
export default App;
