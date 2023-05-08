import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 70%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: solid 2px black; */
  margin:0px;
  padding:5px;
`;
const StyledButton = styled.button`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: solid 2px black;
  margin:0px;
  padding:5px;
  background-color: white;
`;
export default function AddToCartButton() {
  return (
    <StyledDiv>
      <StyledButton type="button">Add to Cart</StyledButton>
    </StyledDiv>
  );
}
