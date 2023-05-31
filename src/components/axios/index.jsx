import axios from "axios";
import React from "react";
import Axiosing from "./axiosing/axios";
// import Fetching from "./fetching/fetch";

const Root = () => {
  axios.interceptors.request.use((request) => {
    console.log(request, "request");
    request.headers.Authorization = "Bearer webbrain";
    return request;
  });
  axios.interceptors.response.use((res) => {
    console.log(res, "res");
    return res;
  });
  return (
    <div style={{ display: "flex" }}>
      <Axiosing />
      {/* <Fetching /> */}
    </div>
  );
};
export default Root;
