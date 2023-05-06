import React from 'react';
import styled from 'styled-components';
import AddItemToOutfit from './AddItemToOutfit';
import ProductCard from '../ProductCard/ProductCard';
import { Carousel } from '../../styles';

const Title = styled.h2`
  margin-inline: auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 60%;
`;
export default function YourOutfit() {
  return (
    <div>
      <Title>Your Outfit</Title>
      <Carousel>
        <AddItemToOutfit />
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
