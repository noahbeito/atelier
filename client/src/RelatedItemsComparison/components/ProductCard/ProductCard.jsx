import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import ActionButton from './ActionButton';
import ComparisonModal from '../RelatedItems/ComparisonModal';
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
  aspect-ratio: .9;
  object-fit: cover;
`;
const StyledWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.5);
  &:hover {
    transform: scale(1.2);
  }
`;
export default function ProductCard({
  id, handleRemoveItemClick, symbol,
}) {
  const dispatch = useDispatch();
  const [photoURL, setPhotoURL] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);
  const [salePrice, setSalePrice] = useState('');
  // const [avgRating, setAvgRating] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [cardClick, setCardClick] = useState(true);

  // const calculateAvgRating = (ratings) => {
  //   // calculate and return avg of all ratings in ratings obj
  // };

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
    if (cardClick) {
      dispatch({ type: '@product/FETCH_DATA' });
      axios.get(`/products/${id}`)
        .then((result) => {
          dispatch({ type: '@product/SET_DATA', payload: result.data });
        })
        .catch((err) => {
          dispatch({ type: '@product/FETCH_FAILED', payload: err.message });
        });
    }
  };

  const handleStarClick = () => {
    setShowModal(!showModal);
  };

  const handleMouseEnter = () => {
    setCardClick(false);
  };

  const handleMouseLeave = () => {
    setCardClick(true);
  };

  useEffect(() => {
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
  }, []);

  return (
    <Card onClick={() => handleClick()}>
      {showModal && <ComparisonModal />}
      <StyledWrap>
        <ActionButton
          id={id}
          handleRemoveItemClick={handleRemoveItemClick}
          symbol={symbol}
          handleStarClick={handleStarClick}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </StyledWrap>
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
  handleRemoveItemClick: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
};
