import React from "react";
import "./style.jsx";
import { Container, Item } from "./style.jsx";
import { Outlet, useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const active = (url) => {
    return window.location.pathname.includes(url);
  };

  return (
    <>
      <Container>
        <h1 onClick={() => navigate("/home")}>LOGO</h1>
        <Item active={active("/home")} to={"/home"}>
          Home
        </Item>
        <Item active={active("/about")} to={"/about"}>
          About
        </Item>
        <Item active={active("/contact")} to={"/contact"}>
          Contact
        </Item>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "white" };
          }}
          to={"/info"}
        >
          Info
        </NavLink>
      </Container>
      <Outlet />
    </>
  );
};
export default Navbar;
