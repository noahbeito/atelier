import React from 'react';
import RelatedItems from './components/RelatedItems/RelatedItems';
import YourOutfit from './components/YourOutfit/YourOutfit';

export default function RelatedItemsComparison() {
  const chevronClickHandler = (carouselId, direction) => {
    console.log('CHEVY CLICK: ', carouselId, direction);
    const carousel = document.getElementById(carouselId);
    const sliderIndex = parseInt(getComputedStyle(carousel).getPropertyValue('--slider-index'), 10);
    if (direction === 'right') {
      carousel.style.setProperty('--slider-index', sliderIndex - 1);
    }
    if (direction === 'left') {
      carousel.style.setProperty('--slider-index', sliderIndex + 1);
    }
  };

  return (
    <div>
      <RelatedItems chevronClickHandler={chevronClickHandler} />
      <YourOutfit chevronClickHandler={chevronClickHandler} />
    </div>
  );
}
