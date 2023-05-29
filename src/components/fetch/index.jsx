import React, { useState, useEffect } from "react";

const Fetching = () => {
  const [state, setState] = useState([]);
  const [id, setId] = useState({});

  const getInfo = (id) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users/${id ? id : ""}`
    ).then((res) => res.json());
  };

  useEffect(() => {
    getInfo().then((res) => setState(res));
  }, []);

  const onSelect = (id) => {
    getInfo(id).then((res) => setId(res));
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h1>Users list</h1>
        {state.map((value) => (
          <h1 key={value.id}>
            {value.id} - {value.name}{" "}
            <button onClick={() => onSelect(value.id)}>Clicking</button>
          </h1>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <h1>Name: {id.name}</h1>
        <h2>Surname: {id.surname}</h2>
        <h3>email: {id.email}</h3>
      </div>
    </div>
  );
};
export default Fetching;
