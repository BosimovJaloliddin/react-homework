import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Single = () => {
  const [state, setState] = useState([]);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((res) => {
        setState(res);
      });
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        {state.map((v) => (
          <h1 key={v.id}>
            {v.id}-{v.name}
            <button
              onClick={() => {
                navigate(`/home`);
                setData(v);
              }}
            >
              setUrl
            </button>
          </h1>
        ))}
      </div>
      <div>
        <h1>Select {data.name}</h1>
      </div>
    </div>
  );
};
export default Single;
