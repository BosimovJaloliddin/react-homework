import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;
  color: white;
`;

export const NavbarItems = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
  list-style: none;
  font-size: 18px;
  font-weight: 700;
`;
export const NavbarItem = styled(NavLink)`
  color: ${({ active }) => (active ? "red" : "white")};
  text-decoration: none;
`;
