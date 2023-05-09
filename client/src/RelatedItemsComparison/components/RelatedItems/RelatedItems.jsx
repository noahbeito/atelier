import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { Title, Carousel } from '../../styles';

export default function RelatedItems() {
  const dispatch = useDispatch();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const productId = useSelector((state) => state.product.data.id);

  useEffect(() => {
    if (productId) {
      axios.get(`/products/${productId}/related`)
        .then((relatedIds) => {
          console.log('PRODUCTID:', productId);
          setRelatedProducts(relatedIds.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [productId]);

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
