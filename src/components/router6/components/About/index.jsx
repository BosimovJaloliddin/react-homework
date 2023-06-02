import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const getLogin = () => {
    if (refLog.current.value === "webbrain" && refPw.current.value == 1234) {
      localStorage.setItem("token", true);
      navigate("/contact");
    } else {
      localStorage.setItem("token", false);
    }
  };
  const refLog = useRef();
  const refPw = useRef();
  return (
    <div>
      <input ref={refLog} type="text" />
      <input ref={refPw} type="text" />
      <button onClick={getLogin}>submit</button>
    </div>
  );
};
export default About;
