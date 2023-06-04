import React, { useState } from "react";

const Main = (Component) => {
  const Unit = () => {
    const [state, setState] = useState(0);
    const incerement = () => {
      setState(state + 1);
    };
    return <Component state={state} incerement={incerement} />;
  };
  return Unit;
};

export default Main;
