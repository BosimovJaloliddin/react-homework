import React from "react";
import "./style.jsx";
import { Container, Item } from "./style.jsx";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <Container>
      <h1 onClick={() => history.push("/home")}>LOGO</h1>
      <Item exact to={"/home"}>
        Home
      </Item>
      <Item to={"/about"}>About</Item>
      <Item to={"/contact"}>Contact</Item>
      <Item to={"/info"}>Info</Item>
    </Container>
  );
};
export default Navbar;
