import React from "react";
import { useOutlet, Outlet, useNavigate } from "react-router-dom";
import { CompyuterWrap, CompyuterBox } from "./style";

const Compyuters = () => {
  const hasOutlet = useOutlet();
  const navigate = useNavigate();
  return (
    <>
      {!hasOutlet ? (
        <Outlet />
      ) : (
        <CompyuterWrap>
          <CompyuterBox navigate={() => navigate("/compyuters/mackbook")}>
            MackBook
          </CompyuterBox>
          <CompyuterBox navigate={() => navigate("/compyuters/hp")}>
            HP
          </CompyuterBox>
          <CompyuterBox navigate={() => navigate("/compyuters/lenova")}>
            Lenova
          </CompyuterBox>
          <CompyuterBox navigate={() => navigate("/compyuters/asus")}>
            Asus
          </CompyuterBox>
        </CompyuterWrap>
      )}
    </>
  );
};

export default Compyuters;
