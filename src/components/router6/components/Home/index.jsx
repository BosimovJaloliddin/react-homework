import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((res) => {
        setState(res);
      });
  }, []);
  return (
    <div>
      {state.map((v) => (
        <h1 key={v.id}>
          {v.id}-{v.name}{" "}
          <button onClick={() => navigate(`/home/:${v.name}`)}>setUrl</button>
        </h1>
      ))}
    </div>
  );
};
export default Home;
