import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddItemToOutfit from './AddItemToOutfit';
import ProductCard from '../ProductCard/ProductCard';
import ChevronLeft from '../CarouselButtons/ChevronLeft';
import ChevronRight from '../CarouselButtons/ChevronRight';
import {
  Title, OutfitCarousel, OutfitContainer, List,
} from '../../styles';

export default function YourOutfit({ chevronClickHandler }) {
  const [outfit, setOutfit] = useState([]);
  const [viewIndex, setViewIndex] = useState(0);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(false);
  const symbol = 'Exit';
  const carouselId = 'outfit-carousel';

  useEffect(() => {
    const savedOutfit = JSON.parse(localStorage.getItem('outfit'));
    if (savedOutfit) {
      setOutfit(savedOutfit);
      if (savedOutfit.length > 3) {
        setShowRightChevron(true);
      } else {
        setShowRightChevron(false);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('outfit', JSON.stringify(outfit));
    if (outfit.length > 3) {
      setShowRightChevron(true);
    } else {
      setShowRightChevron(false);
    }
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

  const rightClickHandler = () => {
    chevronClickHandler(carouselId, 'right');
    setViewIndex(viewIndex + 1);
  };

  const leftClickHandler = () => {
    chevronClickHandler(carouselId, 'left');
    setViewIndex(viewIndex - 1);
  };

  useEffect(() => {
    if (viewIndex + 3 >= outfit.length) {
      setShowRightChevron(false);
    } else {
      setShowRightChevron(true);
    }
    if (viewIndex > 0) {
      setShowLeftChevron(true);
    } else {
      setShowLeftChevron(false);
    }
  }, [viewIndex]);

  return (
    <List>
      <Title>Your Outfit</Title>
      <AddItemToOutfit clickHandler={handleAddToOutfitClick} />
      {showLeftChevron && <ChevronLeft clickHandler={leftClickHandler} />}
      <OutfitContainer>
        <OutfitCarousel id={carouselId}>
          {outfit.map((productId) => (
            <ProductCard
              id={productId}
              handleRemoveItemClick={handleRemoveItemClick}
              symbol={symbol}
              key={productId}
            />
          ))}
        </OutfitCarousel>
      </OutfitContainer>
      {showRightChevron && <ChevronRight clickHandler={rightClickHandler} />}
    </List>
  );
}

YourOutfit.propTypes = {
  chevronClickHandler: PropTypes.func.isRequired,
};
