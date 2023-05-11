import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'underscore';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import NoRelatedItemsCard from '../ProductCard/NoRelatedItemsCard';
import ChevronLeft from '../CarouselButtons/ChevronLeft';
import ChevronRight from '../CarouselButtons/ChevronRight';
import {
  Title, Carousel, Container, List,
} from '../../styles';

export default function RelatedItems({ chevronClickHandler }) {
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
    <List>
      <Title>Related Items</Title>
      <Container>
        <ChevronLeft clickHandler={chevronClickHandler} carouselId="related-carousel" />
        <Carousel id="related-carousel" data-testid="related-carousel">
          {noRelatedItems && <NoRelatedItemsCard />}
          {relatedProducts.map((id) => (
            <ProductCard id={id} symbol={symbol} key={id} />
          ))}
        </Carousel>
        <ChevronRight clickHandler={chevronClickHandler} carouselId="related-carousel" />
      </Container>
    </List>
  );
}

RelatedItems.propTypes = {
  chevronClickHandler: PropTypes.func.isRequired,
};
