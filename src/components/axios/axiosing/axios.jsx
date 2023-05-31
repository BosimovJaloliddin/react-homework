import React, { useEffect } from "react";
import axios from "axios";

const Axiosing = () => {
  // useEffect(() => {
  //   axios({
  //     url: `https://jsonplaceholder.typicode.com/users`,
  //     method: "POST",
  //     body: { name: "Jaloliddin" },
  //     timeout: 10000,
  //   }).then((res) => {
  //     console.log(res, "axios");
  //   });
  // }, []);
  useEffect(() => {
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, {
        body: { name: "Jaloliddin" },
        timeout: 10000,
      })
      .then((res) => {
        console.log(res, "axios");
      });
  }, []);
  return (
    <div style={{ flex: 1 }}>
      <h1>Axios</h1>
    </div>
  );
};
export default Axiosing;
