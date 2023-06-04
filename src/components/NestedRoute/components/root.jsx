import React from "react";
import { Route, Routes } from "react-router-dom";
import { componentPath } from "../utils";

const Root = () => {
  return (
    <>
      <Routes>
        {componentPath.map(({ id, pathname, element, child, children }) => {
          return child ? (
            <Route key={id} path={pathname} element={element}>
              {children.map(({ id, element, pathname }) => (
                <Route key={id} path={pathname} element={element} />
              ))}
            </Route>
          ) : (
            <Route key={id} path={pathname} element={element} />
          );
        })}
      </Routes>
    </>
  );
};

export default Root;
