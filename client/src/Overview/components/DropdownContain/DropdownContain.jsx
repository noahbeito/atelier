import React from 'react';
import styled from 'styled-components';
import SizeDropdown from '../SizeDropdown/SizeDropdown';
import QuantityDropdown from '../QuantityDropdown/QuantityDropdown';

const StyledDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  /* border: solid 2px black; */
  margin:0px;
  padding:0px;
`;
export default function DropdownContain() {
  return (
    <StyledDiv>
      <SizeDropdown />
      <QuantityDropdown />
    </StyledDiv>
  );
}
