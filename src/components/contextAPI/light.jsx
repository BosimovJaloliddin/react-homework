import React, { useContext } from "react";
import { CreatRegistrotion } from "./context";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  Container,
  WrapperLight,
  Title,
  ToggleWrap,
  ToggleLight,
  LoginInput,
  PasswordInput,
  PushInput,
} from "./style";

const GlobalStyle = createGlobalStyle`
    .wrapper-light{
        background:${(props) => props.theme.bg};
        color:${(props) => props.theme.cl}
    }
`;

const Light = () => {
  const [data, setNewPosition] = useContext(CreatRegistrotion);
  const theme = {
    bg: data.light === "light" ? "rgb(227,227,227)" : "rgb(40,54,65)",
    cl: data.light === "light" ? "rgb(40,54,65  )" : "rgb(227,227,227)",
  };
  const onRadio = () => {
    setNewPosition({
      ...data,
      dark: data.dark === "dark" ? "light" : "dark",
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <WrapperLight className="wrapper-light">
          <Title>Light</Title>
          <ToggleWrap>
            <ToggleLight onClick={onRadio} type="checkbox" />
          </ToggleWrap>
          <LoginInput type={"name"} placeholder="Login..." />
          <PasswordInput type={"password"} placeholder="Password..." />
          <PushInput>Push</PushInput>
        </WrapperLight>
      </Container>
    </ThemeProvider>
  );
};

export default Light;
