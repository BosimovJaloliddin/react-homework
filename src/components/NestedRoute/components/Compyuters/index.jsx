import React from "react";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import { Wrapper, Box } from "../style";

const Compyuters = () => {
  const hasOutlet = useOutlet();
  const navigate = useNavigate();
  return (
    <>
      {hasOutlet ? (
        <Outlet />
      ) : (
        <Wrapper>
          <Box onClick={() => navigate("/compyuters/hp")}>HP</Box>
          <Box onClick={() => navigate("/compyuters/macbook")}>MacBook</Box>
          <Box onClick={() => navigate("/compyuters/lenova")}>Lenova</Box>
        </Wrapper>
      )}
    </>
  );
};

export default Compyuters;
