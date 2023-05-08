import React from 'react';
import styled from 'styled-components';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import ProductInfo from './components/ProductInfo/ProductInfo';

const Section = styled.section`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  border: solid 2px black;
`;
export default function Overview() {
  return (
    <Section>
      <ProductDisplay />
      <ProductInfo />
    </Section>
  );
}
