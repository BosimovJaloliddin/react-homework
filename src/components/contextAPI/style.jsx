import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  text-align: center;
`;
const wrapper = css`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  margin: 1rem auto;
  padding: 20px;
  border: 1px solid #222;
  border-radius: 7px;
`;
export const WrapperDark = styled.div`
  ${wrapper}
`;
export const WrapperLight = styled.div`
  ${wrapper}
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;
const checkbox = css`
  width: 20px;
  height: 20px;
  border: 1px solid red;
  border-radius: 50%;
  box-shadow: 0 0 7px #ddd;
  &:hover {
    transform: scale(0.95);
    transition: all 1s;
  }
`;
export const ToggleWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const ToggleDark = styled.input`
  ${checkbox}
`;
export const ToggleLight = styled.input`
  ${checkbox}
`;

const input = css`
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 7px;
`;
export const LoginInput = styled.input`
  ${input}
`;
export const PasswordInput = styled.input`
  ${input}
`;
export const PushInput = styled.button`
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
  margin: auto 6rem;
  background: rgb(38, 46, 52);
  color: #ffff;
  border: none;
  border-radius: 7px;
`;
