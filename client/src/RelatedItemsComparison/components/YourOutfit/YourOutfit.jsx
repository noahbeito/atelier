import React from 'react';
import styled from 'styled-components';
import AddItemToOutfit from './AddItemToOutfit';
import ProductCard from '../ProductCard/ProductCard';

export default function YourOutfit() {
  const YourOutfitList = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-left: 5%;
    padding-right: 5%;
  `;
  return (
    <YourOutfitList>
      <AddItemToOutfit />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </YourOutfitList>
  );
}
