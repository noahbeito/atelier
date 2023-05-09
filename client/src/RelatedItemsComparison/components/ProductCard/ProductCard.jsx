import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
const StyledImg = styled.img`
  max-width: 100%;
  aspect-ratio: .7;
  object-fit: cover;
`;
export default function ProductCard({ id }) {
  const dispatch = useDispatch();

  const [photoURL, setPhotoURL] = useState('');
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

  const handleClick = () => {
    dispatch({ type: '@product/FETCH_DATA' });
    axios.get(`/products/${id}`)
      .then((result) => {
        console.log('datadata: ', result.data);
        dispatch({ type: '@product/SET_DATA', payload: result.data });
      })
      .catch((err) => {
        dispatch({ type: '@product/FETCH_FAILED', payload: err.message });
      });
  };

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
        setPhotoURL(photosAndPrices.data.results[0].photos[0].url);
        setPrice(photosAndPrices.data.results[0].original_price);
        setSalePrice(photosAndPrices.data.results[0].sale_price);
        // setAvgRating(calculateAvgRating(ratings.ratings));
      },
    )))
    .catch((err) => {
      console.log(err);
    });

  return (
    <Card onClick={() => handleClick()}>
      <StyledImg src={photoURL} />
      <StyledCategory>{category}</StyledCategory>
      <StyledName>{name}</StyledName>
      <StyledPrice>{salePrice || price}</StyledPrice>
      <Rating />
    </Card>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
};
