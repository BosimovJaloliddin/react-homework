import React from "react";
import { Route, Routes } from "react-router-dom";
import { componentPath } from "../utils";

const Root = () => {
  return (
    <Routes>
      {componentPath.map(({ id, pathname, element, child, childern }) => {
        return child ? (
          <Route exect key={id} path={pathname} element={element}>
            {childern.map(({ id, element }) => (
              <Route key={id} path={pathname} element={element} />
            ))}
          </Route>
        ) : (
          <Route key={id} path={pathname} element={element} />
        );
      })}
    </Routes>
  );
};

export default Root;
