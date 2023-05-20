import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 4rem;
`;
export const Wrapper = styled.div`
  max-width: 400px;
  text-align: center;
  margin: 0 auto;
  border: 2px solid #ddd;
  border-radius: 7px;
  box-shadow: 0 0 7px #222;
  padding: 2rem;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: black;
  letter-spacing: 3px;
  span {
    color: #000d83;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  select {
    font-size: 18px;
    font-weight: 700;
    width: 80px;
    height: 30px;
    border: 2px solid #ddd;
    border-radius: 7px;
    text-align: center;
    color: green;
    &:hover {
      transform: scale(1.2, 1.1);
      transition: all 1s;
    }
  }
`;
const getColor = (props) => {
  return {
    black: "#fff",
    red: "red",
  }[props.cl];
};
export const BoxBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const Button = styled.button`
  width: 80px;
  height: 30px;
  font-size: 18px;
  font-weight: 800;
  color: ${getColor};
  background: #4141f0;
  border: none;
  border-radius: 7px;
  &:hover {
    box-shadow: 0 0 7px #4141f0;
    transition: all 0.4s;
    font-size: 20px;
  }
`;
