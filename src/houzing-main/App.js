import React from "react";
import Navbar from "./navbar/navbar";
import Filter from "./filter/filter";
import Head from "./head/head";
import Recom from "./recommendet/recom";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Filter />
        <Head />
        <Recom />
      </div>
    );
  }
}
export default App;
