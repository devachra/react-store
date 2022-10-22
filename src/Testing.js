import React from "react";
import styled from "styled-components";

const Testing = () => {
  return (
    <Wrapper>
      <h3>Hello World</h3>
      <p>hello people</p>
      <button>click me</button>
    </Wrapper>
  );
};

export default Testing;

const Wrapper = styled.section`
  h3 {
    color: red;
  }
`;
