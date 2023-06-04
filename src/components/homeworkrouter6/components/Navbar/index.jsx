import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import { Container, NavbarItems, NavbarItem } from "./styled";

const Navbar = () => {
  const navigate = useNavigate();
  const active = (url) => {
    return window.location.pathname.includes(url);
  };
  return (
    <>
      <Container>
        <h1 onClick={() => navigate("/home")}>Logo</h1>
        <NavbarItems>
          {navbar.map(
            ({ id, title, pathname, hidden }) =>
              !hidden && (
                <NavbarItem active={active(pathname)} key={id} to={pathname}>
                  {title}
                </NavbarItem>
              )
          )}
        </NavbarItems>
        <h1>Go</h1>
      </Container>
      <Outlet />
    </>
  );
};
export default Navbar;
