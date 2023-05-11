import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddItemToOutfit from './AddItemToOutfit';
import ProductCard from '../ProductCard/ProductCard';
import ChevronLeft from '../CarouselButtons/ChevronLeft';
import ChevronRight from '../CarouselButtons/ChevronRight';
import {
  Title, Carousel, Container, List,
} from '../../styles';

export default function YourOutfit({ chevronClickHandler }) {
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

  const handleAddToOutfitClick = (productId) => {
    if (!outfit.includes(productId)) {
      setOutfit([...outfit, productId]);
    }
  };

  const handleRemoveItemClick = (id) => {
    outfit.splice(outfit.indexOf(id), 1);
    setOutfit([...outfit]);
  };

  const symbol = 'Exit';

  return (
    <List>
      <Title>Your Outfit</Title>
      <Container>
        <ChevronLeft clickHandler={chevronClickHandler} carouselId="outfit-carousel" />
        <Carousel id="outfit-carousel">
          <AddItemToOutfit clickHandler={handleAddToOutfitClick} />
          {outfit.map((productId) => (
            <ProductCard
              id={productId}
              handleRemoveItemClick={handleRemoveItemClick}
              symbol={symbol}
              key={productId}
            />
          ))}
        </Carousel>
        <ChevronRight clickHandler={chevronClickHandler} carouselId="outfit-carousel" />
      </Container>
    </List>
  );
}

YourOutfit.propTypes = {
  chevronClickHandler: PropTypes.func.isRequired,
};
