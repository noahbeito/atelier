import React, { useState } from 'react';
import RelatedItems from './components/RelatedItems/RelatedItems';
import YourOutfit from './components/YourOutfit/YourOutfit';
import ComparisonModal from './components/RelatedItems/ComparisonModal';

export default function RelatedItemsComparison() {
  const [showModal, setShowModal] = useState(false);

  const chevronClickHandler = (carouselId, direction) => {
    const carousel = document.getElementById(carouselId);
    const sliderIndex = parseInt(getComputedStyle(carousel).getPropertyValue('--slider-index'), 10);
    if (direction === 'right') {
      carousel.style.setProperty('--slider-index', sliderIndex - 1);
    }
    if (direction === 'left') {
      carousel.style.setProperty('--slider-index', sliderIndex + 1);
    }
  };

  const modalClickHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <RelatedItems
        chevronClickHandler={chevronClickHandler}
        modalClickHandler={modalClickHandler}
      />
      <YourOutfit chevronClickHandler={chevronClickHandler} />
      {showModal && <ComparisonModal />}
    </div>
  );
}
