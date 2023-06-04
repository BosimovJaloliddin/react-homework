import React from "react";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";

const Cars = () => {
  const hasOutlet = useOutlet();
  const navigate = useNavigate();
  return (
    <div>
      {hasOutlet ? (
        <Outlet />
      ) : (
        <div>
          <div onClick={() => navigate("/cars/bmw")}>card1</div>
          <div onClick={() => navigate("/cars/audi")}>card2</div>
          <div onClick={() => navigate("/cars/porch")}>card3</div>
          <div onClick={() => navigate("/cars/ferrari")}>card4</div>
        </div>
      )}
    </div>
  );
};

export default Cars;
