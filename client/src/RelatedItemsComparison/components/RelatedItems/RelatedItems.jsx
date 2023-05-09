import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'underscore';
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
          let ids = relatedIds.data;
          ids.forEach((id, i) => {
            if (id === productId) {
              relatedIds.data.splice(i, 1);
            }
            ids = _.uniq(ids);
          });
          setRelatedProducts(ids);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [productId]);

  const action = () => {
    // render comparison modal
  };

  const symbol = 'EmptyStar';

  return (
    <div>
      <Title>Related Items</Title>
      <Carousel>
        {relatedProducts.map((id) => (
          <ProductCard id={id} action={action} symbol={symbol} key={id} />
        ))}
      </Carousel>
    </div>
  );
}
