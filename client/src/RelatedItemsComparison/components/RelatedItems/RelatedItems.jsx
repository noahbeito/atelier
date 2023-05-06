import React from 'react';
import styled from 'styled-components';
import ProductCard from '../ProductCard/ProductCard';
import { Carousel } from '../../styles';

const Title = styled.h2`
  margin-inline: auto;
  margin-top: 1.5rem;
  width: 60%;
`;
export default function RelatedItems() {
  return (
    <div>
      <Title>Related Items</Title>
      <Carousel>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel>
    </div>
  );
}
