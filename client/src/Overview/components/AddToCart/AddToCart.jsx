import React from 'react';
import styled from 'styled-components';
import AddToCartButton from './AddToCartButton';
import AddToFavButton from './AddToFavButton';

const StyledSection = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: solid 2px black; */
  margin:0px;
  padding:5px;
`;
export default function AddToCart() {
  return (
    <StyledSection>
      <AddToCartButton />
      <AddToFavButton />
    </StyledSection>
  );
}
