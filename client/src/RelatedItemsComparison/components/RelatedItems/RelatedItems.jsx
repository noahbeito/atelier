import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { Title, Carousel } from '../../styles';

export default function RelatedItems() {
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

  return (
    <div>
      <Title>Related Items</Title>
      <Carousel>
        {relatedProducts.map((id) => <ProductCard id={id} key={id} />)}
      </Carousel>
    </div>
  );
}
