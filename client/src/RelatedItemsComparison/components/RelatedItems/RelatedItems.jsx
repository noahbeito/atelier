import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { Title, Carousel } from '../../styles';

export default function RelatedItems() {
  const dispatch = useDispatch();
  const [relatedProducts, setRelatedProducts] = useState([]);
  // useSelector to retrieve product_id of current view state from the redux store;
  // const productId = useSelector((state) => state.product_id);
  // ^unsure if this is the correct syntax. I think will depend how state/productId is formatted
  // in the redux store;

  // hardcoding productID for testing purposes ***DELETE LATER***
  const productId = 40350;

  // send axios get request to related products endpoint;
  useEffect(() => {
    axios.get(`/products/${productId}/related`)
      .then((relatedIds) => {
        setRelatedProducts(relatedIds.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (clickedProductId) => {
    dispatch({ type: '@product/FETCH_DATA' });
    axios.get(`/products/${clickedProductId}`)
      .then((result) => {
        dispatch({ type: '@products/SET_DATA', payload: result.data });
      })
      .catch((err) => {
        dispatch({ type: '@product/FETCH_FAILED', payload: err.message });
      });
  };

  return (
    <div>
      <Title>Related Items</Title>
      <Carousel>
        {relatedProducts.map((id) => <ProductCard id={id} handleClick={handleClick} key={id} />)}
      </Carousel>
    </div>
  );
}
