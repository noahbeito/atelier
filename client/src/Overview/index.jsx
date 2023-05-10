import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import ProductInfo from './components/ProductInfo/ProductInfo';
import ImageGalleryExpand from './components/ImageGallery/ImageGalleryExpand';

const Section = styled.section`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  border: solid 2px black;
`;
export default function Overview() {
  const [renderCheckout, setRenderCheckout] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: '@styles/FETCH_DATA' });
    axios.get('/products/40353/styles')
      .then((result) => {
        console.log('This is result', result);
        dispatch({ type: '@styles/SET_DATA', payload: result.data });
      })
      .catch((error) => {
        dispatch({ type: '@styles/FETCH_FAILED', payload: error.message });
      });
  }, [dispatch]);
  const onClick = useCallback(() => {
    setRenderCheckout(!renderCheckout);
  });
  return (
    <Section>
      {/* <p>{product}</p> */}
      { renderCheckout ? <ProductDisplay onClickHandler={onClick} />
        : <ImageGalleryExpand onClickHandler={onClick} />}
      {/* <ProductDisplay /> */}
      <ProductInfo />
    </Section>
  );
}
ProductDisplay.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

ProductDisplay.defaultProps = {
  onClickHandler: PropTypes.func.isRequired,
};
