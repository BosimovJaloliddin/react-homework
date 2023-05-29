import React from "react";
import { useRef } from "react";

const Login = () => {
  const pushLogin = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      mathod: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginRef,
        password: pwRef,
      }),
    }).then((res) => res.json());
  };

  const loginRef = useRef("");
  const pwRef = useRef("");
  return (
    <div>
      <span>
        login <input ref={loginRef} type="text" />
      </span>
      <span>
        password <input ref={pwRef} type="password" />
      </span>
      <button onClick={pushLogin}>Push</button>
    </div>
  );
};
export default Login;
