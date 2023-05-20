import React, { useReducer } from "react";
import { Container, Title, Wrapper, Box, BoxBtn, Button } from "./styled";

const Reduce = () => {
  const reduce = (state, action) => {
    switch (action.type) {
      case "1":
        return { ...state, count: state.count + action.payload };
      case "5":
        return { ...state, count: state.count + action.payload };
      case "20":
        return { ...state, count: state.count + action.payload };
      case "50":
        return { ...state, count: state.count + action.payload };
      case "100":
        return { ...state, count: state.count + action.payload };
      default:
        return { ...state };
    }
  };
  const [data, dispatch] = useReducer(reduce, { count: 0, type: "1" });
  const onSelect = ({ target: { value } }) => {
    data.type = value;
  };
  return (
    <Container>
      <Wrapper>
        <Title>
          Counter:<span>{data.count}</span>
        </Title>
        <Box>
          <select onChange={onSelect} name="select" id="select">
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <BoxBtn>
            <Button
              cl="black"
              onClick={() => dispatch({ type: data.type, payload: +data.type })}
            >
              +{data.type}
            </Button>
            <Button
              cl="red"
              onClick={() => dispatch({ type: data.type, payload: -data.type })}
            >
              -{data.type}
            </Button>
          </BoxBtn>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Reduce;
