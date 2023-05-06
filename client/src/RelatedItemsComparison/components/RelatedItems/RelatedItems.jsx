import React from 'react';
import styled from 'styled-components';
import ProductCard from '../ProductCard/ProductCard';

export default function RelatedItems() {
  const Title = styled.h2`

  `;
  const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  grid-auto-columns: 23%;

  overflow-x: auto;
  overscroll-behavior-inline: contain;

  scroll-snap-type: inline mandatory; // this might change when implementing right/left buttons
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
