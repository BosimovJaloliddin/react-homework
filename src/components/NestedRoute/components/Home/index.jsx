import React from "react";
import { useNavigate } from "react-router-dom";
import { componentPath } from "../../utils";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {componentPath.map(
        ({ id, title, hidden, pathname }) =>
          !hidden && (
            <div onClick={() => navigate(pathname)} key={id}>
              {title}
            </div>
          )
      )}
    </div>
  );
};

export default Home;
