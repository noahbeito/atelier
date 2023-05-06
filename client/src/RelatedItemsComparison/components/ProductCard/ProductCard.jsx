import React from 'react';
import styled from 'styled-components';

export default function ProductCard() {
  const Card = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    width: 25%;
    height: 300px;
    flex: 0 0 auto;
  `;
  const Category = styled.div`
  `;
  const Name = styled.div`
  `;
  const Price = styled.div`
  `;
  const Rating = styled.div`
  `;
  const Img = styled.div`
  `;
  return (
    <Card>
      <Category>Category</Category>
      <Name>Name</Name>
      <Price>
        Price - for the default style
        <br />
        Sale prices should be reflected
        <br />
        if on sale:
        <br />
        sale price in red and og price struckthrough
      </Price>
      <Rating>star rating</Rating>
      <Img>preview image/images</Img>
    </Card>
  );
}
