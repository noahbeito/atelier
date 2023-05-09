import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { Title, Carousel } from '../../styles';

export default function RelatedItems() {
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
        console.log('THIS ERROR?', err);
      });
  }, []);

  // upon recieving array of related product_ids;
  // set state of related products
  // use map to dynamically render a product card for
  // each product_id and pass down the product_id as a prop;
  // add a key for each and set to product_id as well.
  return (
    <div>
      <Title>Related Items</Title>
      <Carousel>
        {relatedProducts.map((id) => <ProductCard id={id} key={id} />)}
      </Carousel>
    </div>
  );
}
