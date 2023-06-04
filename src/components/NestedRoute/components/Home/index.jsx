import React from "react";
import { useNavigate } from "react-router-dom";
import { componentPath } from "../../utils";
import { Wrapper, Box } from "../style";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      {componentPath.map(
        ({ id, title, hidden, pathname }) =>
          !hidden && (
            <Box onClick={() => navigate(pathname)} key={id}>
              {title}
            </Box>
          )
      )}
    </Wrapper>
  );
};

export default Home;
