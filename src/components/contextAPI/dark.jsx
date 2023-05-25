import React, { useContext } from "react";
import { CreatRegistrotion } from "./context";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  Container,
  WrapperDark,
  Title,
  ToggleWrap,
  ToggleDark,
  LoginInput,
  PasswordInput,
  PushInput,
} from "./style";

const GlobalStyle = createGlobalStyle`
  .wrapper-dark{
        background:${(props) => props.theme.bg};
        color:${(props) => props.theme.cl}
    }
`;

const Login = () => {
  const [data, setNewPosition] = useContext(CreatRegistrotion);
  const theme = {
    bg: data.dark === "dark" ? "rgb(40,54,65)" : "rgb(227,227,227)",
    cl: data.dark === "dark" ? "rgb(227,227,227)" : "rgb(40,54,65)",
  };
  const onRadio = () => {
    setNewPosition({
      ...data,
      light: data.light === "light" ? "dark" : "light",
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <WrapperDark className="wrapper-dark">
          <Title>Dark</Title>
          <ToggleWrap>
            <ToggleDark
              onClick={onRadio}
              id={"dark"}
              name="radio"
              type="checkbox"
            />
          </ToggleWrap>
          <LoginInput type={"name"} placeholder="Login..." />
          <PasswordInput type={"password"} placeholder="Password..." />
          <PushInput>Push</PushInput>
        </WrapperDark>
      </Container>
    </ThemeProvider>
  );
};
export default Login;
