import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background: black;
  color: white;
`;

export const active = {
  color: "red",
};
export const Item = styled(NavLink)`
  color: ${({ active }) => (active ? "red" : "white")};
  font-size: 24px;
  font-weight: 700;
  margin: 1rem auto;
  text-decoration: none;
`;
