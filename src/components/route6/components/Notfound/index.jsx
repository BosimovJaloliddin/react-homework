import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Notfound = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.goBack()}>Oldinga</button>
      <button onClick={() => history.goForward()}>Orqaga</button>
      <h1>NOT FOUND</h1>
    </div>
  );
};
export default Notfound;
