import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 50%;
  height: 100%;
  margin:0px;
  padding:5px;
  border: solid 2px black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledSelect = styled.select`
  width: 170px;
  height: 50px;
  margin:2px;
  padding:5px;
  border: solid 2px black;
`;
export default function QuantityDropdown() {
  return (
    <StyledDiv>
      <StyledSelect>
        <option value="default">Quantity</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </StyledSelect>
    </StyledDiv>
  );
}
