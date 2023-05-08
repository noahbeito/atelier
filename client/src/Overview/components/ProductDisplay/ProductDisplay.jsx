import React from 'react';
import styled from 'styled-components';
import ImageGallery from '../ImageGallery/ImageGallery';
import CheckoutDisplay from '../CheckoutDisplay/CheckoutDisplay';

const StyledDiv = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  border: solid 2px black;
`;
export default function ProductDisplay() {
  return (
    <StyledDiv>
      <ImageGallery />
      <CheckoutDisplay />
    </StyledDiv>
  );
}
