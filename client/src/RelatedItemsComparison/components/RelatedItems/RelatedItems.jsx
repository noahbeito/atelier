import React from 'react';
import styled from 'styled-components';
import ProductCard from '../ProductCard/ProductCard';

export default function RelatedItems() {
  const Title = styled.h2`

  `;
  const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-left: 5%;
  padding-right: 5%;
`;
  return (
    <div>
      <Title>Related Items</Title>
      <Container>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Container>
    </div>
  );
}
