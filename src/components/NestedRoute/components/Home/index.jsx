import React from "react";
import { componentPath } from "../../utils";
import { HomeWrap, HomeBox } from "./style";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeWrap>
      {componentPath.map((v) => (
        <HomeBox onClick={() => navigate(v.pathname)} key={v.id}>
          {v.title}
        </HomeBox>
      ))}
    </HomeWrap>
  );
};

export default Home;
