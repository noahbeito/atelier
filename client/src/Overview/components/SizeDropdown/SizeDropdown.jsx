import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 50%;
  height: 100%;
  margin:0px;
  padding:5px;
  border: solid 2px black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Select = styled.select`
  width: 170px;
  height: 50px;
  margin:2px;
  padding:5px;
  border: solid 2px black;
`;
export default function SizeDropdown() {
  return (
    <Div>
      <Select>
        <option value="default">Size</option>
        <option value="vegetable">Small</option>
        <option value="meat">Medium</option>
      </Select>
    </Div>
  );
}
