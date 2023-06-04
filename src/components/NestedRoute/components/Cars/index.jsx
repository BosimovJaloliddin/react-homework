import React from "react";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import { Wrapper, Box } from "../style";

const Cars = () => {
  const hasOutlet = useOutlet();
  const navigate = useNavigate();
  return (
    <div>
      {hasOutlet ? (
        <Outlet />
      ) : (
        <Wrapper>
          <Box onClick={() => navigate("/cars/bmw")}>Bmw</Box>
          <Box onClick={() => navigate("/cars/audi")}>Audi</Box>
          <Box onClick={() => navigate("/cars/porch")}>Porch</Box>
          <Box onClick={() => navigate("/cars/ferrari")}>Ferrari</Box>
        </Wrapper>
      )}
    </div>
  );
};

export default Cars;
