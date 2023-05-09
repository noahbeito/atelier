import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
  const onClickHandler = () => {
    console.log('I have been clicked!');
    setRenderCheckout(!renderCheckout);
  };
  return (
    <Section>
      { renderCheckout ? <ProductDisplay onClickHandler={onClickHandler} />
        : <ImageGalleryExpand />}
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
