import React from 'react';
import AddToCart from '../AddToCart/AddToCart';
import StyleSelector from '../StyleSelector/StyleSelector';
// import StarReview from './components/StarReview';

export default function ProductDisplay() {
  return (
    <>
      {/* <StarReview />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.category}</p> */}
      <StyleSelector />
      <AddToCart />
    </>
  );
}
