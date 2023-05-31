import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
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
export const Item = styled(NavLink).attrs(() => {
  return { activeStyle: active };
})`
  font-size: 24px;
  font-weight: 700;
  margin: 1rem auto;
  text-decoration: none;
  color: white;
`;
