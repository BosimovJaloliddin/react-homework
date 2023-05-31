import React from "react";

const Fetching = () => {
  const signal = new AbortController();
  fetch(`https://jsonplaceholder.typicode.com/users`, {
    body: {},
    method: "",
    headers: {},
    signal,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res, "fetch");
    });
  setTimeout(() => signal.abort(), 10000);
  return (
    <div style={{ flex: 1 }}>
      <h1>Fetch</h1>
    </div>
  );
};

export default Fetching;
