import React, { createContext, useReducer } from "react";
import { reducer, initialValue } from "./reducer";

export const StudentContext = createContext();

const Student = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <StudentContext.Provider value={[state, dispatch]}>
      {children}
    </StudentContext.Provider>
  );
};
export default Student;
