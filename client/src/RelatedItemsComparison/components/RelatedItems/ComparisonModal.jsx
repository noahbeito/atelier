import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-rows: 10% 10% 80%;
  grid-template-columns: 20% 20% 20% 20% 20%;
  height: 200px;
  width: fit-content;
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
      <div>
        <div className="modal-header">
          <StyledTitle>Comparing</StyledTitle>
        </div>
        <div className="modal-body">
          <StyledCurrent>Current Product</StyledCurrent>
          <StyledCompare>Comparison Column</StyledCompare>
          <StyledRelated>Related Product</StyledRelated>
        </div>
        <div className="modal-footer">
          <div>footer</div>
        </div>
      </div>
    </StyledModal>
  );
}
