import React from "react";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import { CarWrap, CarBox } from "./style";

const Cars = () => {
  const hasOutlet = useOutlet();
  const navigate = useNavigate();
  return (
    <>
      {!hasOutlet ? (
        <Outlet />
      ) : (
        <CarWrap>
          <CarBox onClick={() => navigate("/cars/bmw")}>BMW</CarBox>
          <CarBox onClick={() => navigate("/cars/ford")}>Ford</CarBox>
          <CarBox onClick={() => navigate("/cars/ferrari")}>Ferrari</CarBox>
        </CarWrap>
      )}
    </>
  );
};

export default Cars;
