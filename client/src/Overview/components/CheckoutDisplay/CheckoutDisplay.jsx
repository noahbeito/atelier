import React from 'react';
import styled from 'styled-components';
import AddToCart from '../AddToCart/AddToCart';
import StyleSelector from '../StyleSelector/StyleSelector';
import DropdownContain from '../DropdownContain/DropdownContain';
import StarRating from '../../../components/StarRating';

const StyledDiv = styled.div`
  width: 40%;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* border: solid 2px black; */
  margin:2px;
  padding:5px;
  border-left:solid 1px black;
`;
const StyledSection = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  /* border: solid 2px blue; */
  padding:2px;
`;
const StyledStarRating = styled(StarRating)`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
`;
const data = ['one', 'two', 'three', 'four', 'five', 'six'];
export default function ProductDisplay() {
  return (
    <StyledDiv>
      <StyledStarRating rating={3} className="StarRating" />
      <p>Title</p>
      <p>Price</p>
      <p>Category</p>
      <StyleSelector products={data} />
      <StyledSection>
        <DropdownContain />
        <AddToCart />
      </StyledSection>
    </StyledDiv>
  );
}
