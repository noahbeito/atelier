import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import RelatedItems from './components/RelatedItems/RelatedItems';
import YourOutfit from './components/YourOutfit/YourOutfit';
import ComparisonModal from './components/RelatedItems/ComparisonModal';

export default function RelatedItemsComparison() {
  const [showModal, setShowModal] = useState(false);
  const [characteristics, setCharacteristics] = useState({});
  const [compareName, setCompareName] = useState('');
  const [compare, setCompare] = useState({});

  const productId = useSelector((state) => state.product.data.id);

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

  const handleStarClick = (clickedId, clickedName) => {
    axios({
      url: '/reviews/meta',
      method: 'GET',
      params: { product_id: productId },
    })
      .then((response) => {
        setCharacteristics(response.data.characteristics);
      })
      .then(() => (
        axios({
          url: '/reviews/meta',
          method: 'GET',
          params: { product_id: clickedId },
        })
      ))
      .then((response) => {
        setCompare(response.data.characteristics);
        setCompareName(clickedName);
      })
      .then(() => {
        setShowModal(true);
      })
      .catch((err) => {
        console.log('could not load comparison', err);
      });
  };

  const modalOnClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <RelatedItems
        chevronClickHandler={chevronClickHandler}
        handleStarClick={handleStarClick}
      />
      <YourOutfit chevronClickHandler={chevronClickHandler} />
      {showModal
      && (
      <ComparisonModal
        modalOnClose={modalOnClose}
        characteristics={characteristics}
        compare={compare}
        compareName={compareName}
      />
      )}
    </div>
  );
}
