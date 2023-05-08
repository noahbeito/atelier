import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import { Card } from '../../styles';

const StyledCategory = styled.div`
`;
const StyledName = styled.div`
`;
const StyledPrice = styled.div`
`;
// const StyledSalePrice ...

const Rating = styled.div`
  // will likely delete this when the Rating component is eventually imported and used
`;
const StyledImg = styled.div`
`;
export default function ProductCard({ id }) {
  // create states for all relevant pieces of data;
  const [photo, setPhoto] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);
  const [salePrice, setSalePrice] = useState('');
  // const [avgRating, setAvgRating] = useState('');

  // const calculateAvgRating = (ratings) => {
  //   // calculate and return avg of all ratings in ratings obj
  // };

  // send an axios.all/axios.spread request to the following endpoints:
  // 1) /products/:product_id
  //   --> name and category from response
  // 2) /products/:product_id/styles
  //   --> photo, original price, sale price (prices for the default? === true style only)
  // 3) /reviews
  //   --> average of all reviews to render stars
  //    (need to calculate average manually, refer to Thangs formula);
  const getNameAndCategory = () => (
    axios.get(`/products/${id}`)
  );

  const getPhotosAndPrices = () => (
    axios.get(`/products/${id}/styles`)
  );

  // const getRatings = () => (
  //   axios({
  //     url: '/reviews/meta',
  //     method: 'GET',
  //     params: { product_id: id },
  //   })
  // );

  // will likely have to wrap this in a useEffect
  axios.all([
    getNameAndCategory(),
    getPhotosAndPrices(),
    // getRatings,
  ])
    .then((axios.spread(
      (nameAndCategory, photosAndPrices /* ratings */) => {
        setCategory(nameAndCategory.data.category);
        setName(nameAndCategory.data.name);
        setPhoto(photosAndPrices.data.results[0].thumbnail_url);
        setPrice(photosAndPrices.data.results[0].original_price);
        setSalePrice(photosAndPrices.data.results[0].sale_price);
        // setAvgRating(calculateAvgRating(ratings.ratings));
      },
    )))
    .catch((err) => {
      console.log(err);
    });
  // once have all the data, set the states for each piece of data.

  // use the state below.

  return (
    <Card>
      <StyledCategory>{category}</StyledCategory>
      <StyledName>{name}</StyledName>
      <StyledPrice>{salePrice || price}</StyledPrice>
      <Rating />
      <StyledImg>{photo}</StyledImg>
    </Card>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
};
