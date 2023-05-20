import React, { useReducer, useState } from "react";
import { Container, Title, Wrapper, Box, BoxBtn, Button } from "./styled";

const Reduce = () => {
  const reduce = (state, action) => {
    switch (action.val) {
      case 1:
        return state + action.payload;
      case 5:
        return state + action.payload;
      case 20:
        return state + action.payload;
      case 50:
        return state + action.payload;
      case 100:
        return state + action.payload;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reduce, 0);
  const [val, setVal] = useState(1);
  const onSelect = ({ target: { value } }) => {
    setVal(Number(value));
  };
  return (
    <Container>
      <Wrapper>
        <Title>
          Counter:<span>{count}</span>
        </Title>
        <Box>
          <select onChange={onSelect} name="select" id="select">
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <BoxBtn>
            <Button cl="black" onClick={() => dispatch({ val, payload: val })}>
              +{val}
            </Button>
            <Button cl="red" onClick={() => dispatch({ val, payload: -val })}>
              -{val}
            </Button>
          </BoxBtn>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Reduce;
