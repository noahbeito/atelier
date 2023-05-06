import React from 'react';
import styled from 'styled-components';
import AddToCart from '../AddToCart/AddToCart';
import StyleSelector from '../StyleSelector/StyleSelector';
import DropdownContain from '../DropdownContain/DropdownContain';
// import StarReview from './components/StarReview';

const Div = styled.section`
  width: 40%;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: solid 2px black;
  margin:2px;
  padding:5px;
`;
const Section = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  border: solid 2px blue;
  padding:2px;
`;
export default function ProductDisplay() {
  return (
    <Div>
      {/* <StarReview /> */}
      <p>Title</p>
      <p>Price</p>
      <p>Category</p>
      <StyleSelector />
      <Section>
        <DropdownContain />
        <AddToCart />
      </Section>
    </Div>
  );
}
