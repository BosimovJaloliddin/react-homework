import React from "react";
import { useState, useEffect } from "react";
import { Wrapper, Box } from "./style";
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
    <Wrapper>
      {state.map((v) => (
        <Box key={v.id}>
          <h1>{v.id}</h1>
          <h3>{v.name}</h3>
          <h3>{v.username}</h3>
          <button onClick={() => navigate(`/home/${v.id}`)}>click</button>
        </Box>
      ))}
    </Wrapper>
  );
};

export default Home;
