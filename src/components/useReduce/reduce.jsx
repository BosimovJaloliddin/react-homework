import React, { useReducer } from "react";

const Reduce = () => {
  const baza = {
    count: 0,
    type: "1",
  };
  const reduce = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "1":
        return { ...action, count: action.count + 1 };
      case "5":
        return { ...action, count: action.count + 5 };
      case "20":
        return { ...action, count: action.count + 20 };
      case "50":
        return { ...action, count: action.count + 50 };
      case "100":
        return { ...action, count: action.count + 100 };
      default:
        return { ...action };
    }
  };
  const onSelect = ({ target: { value } }) => {
    dispatch({ ...baza, type: (baza.type = value) });
  };
  const [data, dispatch] = useReducer(reduce, baza);
  console.log(baza.count);
  return (
    <div>
      <h1>Counter:{data.count}</h1>
      <select onChange={onSelect} name="select" id="select">
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <button onClick={() => dispatch(data)}>{data.type}</button>
      <button onClick={() => dispatch(data)}>{data.type}</button>
    </div>
  );
};

export default Reduce;
