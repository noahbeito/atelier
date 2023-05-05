import React from 'react';
import AddToCart from './components/AddToCart';
import StyleSelector from './components/StyleSelector';
// import StarReview from './components/StarReview';



const ProductDisplay = () => {

  render(
    <>
      {/* <StarReview />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.category}</p> */}
      <StyleSelector  />
      <AddToCart />
    </>
  )
}


export default ProductDisplay;