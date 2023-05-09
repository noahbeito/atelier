import React, { useState, useEffect } from 'react';
import AddItemToOutfit from './AddItemToOutfit';
import ProductCard from '../ProductCard/ProductCard';
import { Title, Carousel } from '../../styles';

export default function YourOutfit() {
  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    const savedOutfit = JSON.parse(localStorage.getItem('outfit'));
    if (savedOutfit) {
      setOutfit(savedOutfit);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('outfit', JSON.stringify(outfit));
  }, [outfit]);

  const AddToOutfitClickHandler = (productId) => {
    if (!outfit.includes(productId)) {
      setOutfit([...outfit, productId]);
    }
  };

  const action = () => {
    // remove item from list
  };

  const symbol = 'Exit';

  return (
    <div>
      <Title>Your Outfit</Title>
      <Carousel>
        <AddItemToOutfit clickHandler={AddToOutfitClickHandler} />
        {outfit.map((productId) => (
          <ProductCard id={productId} action={action} symbol={symbol} key={productId} />
        ))}
      </Carousel>
    </div>
  );
}
