import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddItemToOutfit from './AddItemToOutfit';
import ProductCard from '../ProductCard/ProductCard';
import ChevronLeft from '../CarouselButtons/ChevronLeft';
import ChevronRight from '../CarouselButtons/ChevronRight';
import {
  Title, OutfitCarousel, OutfitContainer, List,
} from '../../styles';

// ** COMPONENT ** //
export default function YourOutfit({ chevronClickHandler }) {
  // ** LOCAL STATE ** //
  const [outfit, setOutfit] = useState([]);
  const [viewIndex, setViewIndex] = useState(0);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(false);

  // ** IDENTIFIERS ** //
  const symbol = 'Exit';
  const carouselId = 'outfit-carousel';

  // ** ON RENDER ** //
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

  // ** ON OUTFIT UPDATE **//
  useEffect(() => {
    localStorage.setItem('outfit', JSON.stringify(outfit));
    if (outfit.length > 3) {
      setShowRightChevron(true);
    } else {
      setShowRightChevron(false);
    }
  }, [outfit]);

  // ** ON CAROUSEL SCROLL ** //
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

  // ** CLICK HANDLERS ** //
  const handleAddToOutfitClick = (productId) => {
    if (!outfit.includes(productId)) {
      setOutfit([productId, ...outfit]);
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

  // ** STRUCTURE ** //
  return (
    <div>
      <Title>Your Outfit</Title>
      <List>
        <AddItemToOutfit clickHandler={handleAddToOutfitClick} />
        {showLeftChevron
          && <ChevronLeft clickHandler={leftClickHandler} carouselId={carouselId} />}
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
    </div>
  );
}

YourOutfit.propTypes = {
  chevronClickHandler: PropTypes.func.isRequired,
};
