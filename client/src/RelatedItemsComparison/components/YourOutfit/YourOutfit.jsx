import React from 'react';
import styled from 'styled-components';
import AddItemToOutfit from './AddItemToOutfit';
import ProductCard from '../ProductCard/ProductCard';

const Title = styled.h2`
  margin-inline: auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 60%;
`;
const YourOutfitList = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  grid-auto-columns: 23%;

  overflow-x: auto;
  overscroll-behavior-inline: contain;

  scroll-snap-type: inline mandatory; // this might change when impletmenting right and left buttons
  scroll-padding-inline: 2rem; // this isnt working
`;
export default function YourOutfit() {
  return (
    <div>
      <Title>Your Outfit</Title>
      <YourOutfitList>
        <AddItemToOutfit />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </YourOutfitList>
    </div>
  );
}
