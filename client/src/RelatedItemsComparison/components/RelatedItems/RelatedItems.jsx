import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'underscore';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import NoRelatedItemsCard from '../ProductCard/NoRelatedItemsCard';
import { Title, Carousel } from '../../styles';

export default function RelatedItems() {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [noRelatedItems, setNoRelatedItems] = useState(false);
  const productId = useSelector((state) => state.product.data.id);

  useEffect(() => {
    if (productId) {
      axios.get(`/products/${productId}/related`)
        .then((relatedIds) => {
          let ids = relatedIds.data;
          ids.forEach((id, i) => {
            if (id === productId) {
              relatedIds.data.splice(i, 1);
            }
            ids = _.uniq(ids);
          });
          setRelatedProducts(ids);
          if (ids.length === 0) {
            setNoRelatedItems(true);
          } else {
            setNoRelatedItems(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [productId]);

  const symbol = 'EmptyStar';

  return (
    <div>
      <Title>Related Items</Title>
      <Carousel data-testid="related-carousel">
        {noRelatedItems && <NoRelatedItemsCard />}
        {relatedProducts.map((id) => (
          <ProductCard id={id} symbol={symbol} key={id} />
        ))}
      </Carousel>
    </div>
  );
}
