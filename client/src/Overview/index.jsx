import React, { useState, useEffect, useCallback } from 'react';
// import PropTypes from 'prop-types';
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
  const [defaultList, setDefaultList] = useState([]);
  const [product, setProduct] = useState(40347);
  const [defaultNumber, setDefaultNumber] = useState(1);
  const [bgImg, setBgImg] = useState({});
  const dispatch = useDispatch();
  // setProduct(40344);
  console.log(setProduct);
  useEffect(() => {
    dispatch({ type: '@styles/FETCH_DATA' });
    axios.get(`/products/${product}/styles`)
      .then((result) => {
        setDefaultList(result.data.results);
        setDefaultNumber(result.data.results[0].style_id);
        dispatch({ type: '@styles/SET_DATA', payload: result.data });
      })
      .catch((error) => {
        dispatch({ type: '@styles/FETCH_FAILED', payload: error.message });
      });
  }, [dispatch]);
  const onClickHandler = useCallback(() => {
    setRenderCheckout(!renderCheckout);
  });
  const bgHndle = (val) => {
    setBgImg(val.thumbnail_url);
  };
  // console.log('This is default NUMBER: ', defaultNumber);
  // console.log('This is default list', defaultList);
  return (
    <Section>
      { renderCheckout
        ? (
          <ProductDisplay
            product={product}
            defaultList={defaultList}
            defaultHandler={setDefaultList}
            defaultNumber={defaultNumber}
            defaultNumberHandler={setDefaultNumber}
            bg={bgImg}
            bgHandler={bgHndle}
            onClickHandler={onClickHandler}
          />
        )
        : <ImageGalleryExpand onClickHandler={onClickHandler} />}
      <ProductInfo />
    </Section>
  );
}
// ProductDisplay.propTypes = {
//   onClickHandler: PropTypes.func.isRequired,
// };

// ProductDisplay.defaultProps = {
//   onClickHandler: PropTypes.func.isRequired,
// };
