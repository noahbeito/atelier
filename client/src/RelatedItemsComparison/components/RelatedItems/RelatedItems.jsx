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
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(false);
  const [viewIndex, setViewIndex] = useState(0);
  const productId = useSelector((state) => state.product.data.id);
  const symbol = 'EmptyStar';
  const carouselId = 'related-carousel';

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
          if (ids.length > 4) {
            setShowRightChevron(true);
          } else {
            setShowRightChevron(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [productId]);

  const rightClickHandler = () => {
    console.log('rightClick', 'viewIndex:', viewIndex);
    setViewIndex(viewIndex + 1);
    chevronClickHandler(carouselId, 'right');
  };

  const leftClickHandler = () => {
    console.log('leftClick', 'viewIndex:', viewIndex);
    setViewIndex(viewIndex - 1);
    chevronClickHandler(carouselId, 'left');
  };

  useEffect(() => {
    if (viewIndex + 4 >= relatedProducts.length) {
      setShowRightChevron(false);
    } else {
      setShowRightChevron(true);
    }
    if (viewIndex > 0) {
      setShowLeftChevron(true);
    } else {
      setShowLeftChevron(false);
    }
  }, [viewIndex]);

  return (
    <List>
      <Title>Related Items</Title>
      <Container>
        {showLeftChevron && <ChevronLeft clickHandler={leftClickHandler} />}
        <Carousel id={carouselId} data-testid={carouselId}>
          {noRelatedItems && <NoRelatedItemsCard />}
          {relatedProducts.map((id) => (
            <ProductCard id={id} symbol={symbol} key={id} />
          ))}
        </Carousel>
        {showRightChevron && <ChevronRight clickHandler={rightClickHandler} />}
      </Container>
    </List>
  );
}

RelatedItems.propTypes = {
  chevronClickHandler: PropTypes.func.isRequired,
};
