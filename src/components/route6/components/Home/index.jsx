import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Home = () => {
  const [state, setState] = useState([]);
  const history = useHistory();
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
          <button onClick={() => history.push(`/home/:${v.name}`)}>
            setUrl
          </button>
        </h1>
      ))}
    </div>
  );
};
export default Home;
