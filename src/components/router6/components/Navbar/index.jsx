import React from "react";
import "./style.jsx";
import { Container, Item } from "./style.jsx";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { navbar } from "../utils/navbar";

const Navbar = () => {
  const navigate = useNavigate();
  const active = (url) => {
    return window.location.pathname.includes(url);
  };

  return (
    <>
      <Container>
        <h1 onClick={() => navigate("/home")}>LOGO</h1>
        {navbar.map((v) => (
          <Item active={active(v.pathname)} to={v.pathname}>
            {v.title}
          </Item>
        ))}
      </Container>
      <Outlet />
    </>
  );
};
export default Navbar;
