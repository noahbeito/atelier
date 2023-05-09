import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
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
  // const isLoading = useSelector((state) => state.product.isLoading
  //                                       || state.questionsAnswers.main.loading);
  // const productId = useSelector((state) => state.product.data.id);
  // const productStyles = useSelector((state) => state.product.data.id.styles);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (productId) {
  //     dispatch({ type: '@styles/FETCH_DATA' });
  //     axios.get('/products/40344/styles', { params: { product_id: productId } })
  //       .then((result) => {
  //         dispatch({ type: '@styles/SET_DATA', payload: result.data.styles });
  //       })
  //       .catch((error) => {
  //         dispatch({ type: '@styles/FETCH_FAILED', payload: error });
  //       });
  //   }
  // }, [productId]);
  const onClick = useCallback(() => {
    setRenderCheckout(!renderCheckout);
  }, [renderCheckout]);
  return (
    <Section>
      { renderCheckout ? <ProductDisplay onClickHandler={onClick} />
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
