import React, { useState } from 'react';
import AddItemToOutfit from './AddItemToOutfit';
import ProductCard from '../ProductCard/ProductCard';
import { Title, Carousel } from '../../styles';

export default function YourOutfit() {
  const [outfit, setOutfit] = useState([]);

  const AddToOutfitClickHandler = (productId) => {
    setOutfit([...outfit, productId]);
  };

  return (
    <div>
      <Title>Your Outfit</Title>
      <Carousel>
        <AddItemToOutfit clickHandler={AddToOutfitClickHandler} />
        {outfit.map((productId) => <ProductCard id={productId} key={productId} />)}
      </Carousel>
    </div>
  );
}
