import React, { createContext, useState } from "react";

export const CreatRegistrotion = createContext();

const Registrotion = ({ children }) => {
  const [data, setNewPosition] = useState({
    dark: "dark",
    light: "light",
  });
  return (
    <CreatRegistrotion.Provider value={[data, setNewPosition]}>
      {children}
    </CreatRegistrotion.Provider>
  );
};

export default Registrotion;
