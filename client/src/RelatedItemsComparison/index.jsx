import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import RelatedItems from './components/RelatedItems/RelatedItems';
import YourOutfit from './components/YourOutfit/YourOutfit';
import ComparisonModal from './components/RelatedItems/ComparisonModal';

const Wrapper = styled.div`
  width: 65%;
  margin: 0 auto;
`;

export default function RelatedItemsComparison() {
  const [showModal, setShowModal] = useState(false);
  const [characteristics, setCharacteristics] = useState({});
  const [compareName, setCompareName] = useState('');
  const [compare, setCompare] = useState({});
  const [currentFeatures, setCurrentFeatures] = useState([]);
  const [compareFeatures, setCompareFeatures] = useState([]);

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

  // axios routes to retrieve modal data
  const getCurrentProduct = () => (
    axios({
      url: '/reviews/meta',
      method: 'GET',
      params: { product_id: productId },
    })
  );
  const getCompareProduct = (compareId) => (
    axios.get('/reviews/meta', {
      params: { product_id: compareId },
    })
  );
  const getCurrentFeatures = () => (
    axios.get(`/products/${productId}`)
  );
  const getCompareFeatures = (compareId) => (
    axios.get(`/products/${compareId}`)
  );

  const handleStarClick = (clickedId, clickedName) => {
    axios.all([
      getCurrentProduct(),
      getCompareProduct(clickedId),
      getCurrentFeatures(),
      getCompareFeatures(clickedId),
    ])
      .then((axios.spread(
        (
          currentCharacteristics,
          compareCharacteristics,
          currentFeaturesList,
          compareFeaturesList,
        ) => {
          setCharacteristics(currentCharacteristics.data.characteristics);
          setCompare(compareCharacteristics.data.characteristics);
          setCurrentFeatures(currentFeaturesList.data.features);
          setCompareFeatures(compareFeaturesList.data.features);
          setCompareName(clickedName);
          setShowModal(true);
          document.body.style.overflow = 'hidden';
        },
      )))
      .catch((err) => {
        console.log('unable to load comparison ', err);
      });
  };

  const modalOnClose = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <Wrapper>
      {/* <h2>Related Items</h2> */}
      <RelatedItems
        chevronClickHandler={chevronClickHandler}
        handleStarClick={handleStarClick}
      />
      {/* <h2>Your Outfit</h2> */}
      <YourOutfit chevronClickHandler={chevronClickHandler} />
      {showModal
      && (
      <ComparisonModal
        modalOnClose={modalOnClose}
        characteristics={characteristics}
        compare={compare}
        compareName={compareName}
        currentFeatures={currentFeatures}
        compareFeatures={compareFeatures}
      />
      )}
    </Wrapper>
  );
}
