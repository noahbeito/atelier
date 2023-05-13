import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  display: grid;
  grid-template-rows: 10% 10% 80%;
  grid-template-columns: 20% 20% 20% 20% 20%;
  height: 200px;
  width: fit-content;
  position: absolute;
  background-color: #CDCDCD;
  z-index: 20;
`;

const StyledTitle = styled.div`
  grid-area: 1 / 0 / span 1 / span 1;
`;

const StyledCurrent = styled.div`
  grid-area: 2 / 1 / span 1 / span 1;
  justify-self: start;
`;

const StyledCompare = styled.div`
  grid-area: 2 / 3 / span 1 / span 1;
  justify-self: center;
  text-align: center;
`;

const StyledRelated = styled.div`
  grid-area: 2 / 5 / span 1 / span 1;
  justify-self: end;
`;

export default function ComparisonModal() {
  return (
    <StyledModal>
      <StyledTitle>Comparing</StyledTitle>
      <StyledCurrent>Current Product</StyledCurrent>
      <StyledCompare>Comparison Column</StyledCompare>
      <StyledRelated>Related Product</StyledRelated>
    </StyledModal>
  );
}
