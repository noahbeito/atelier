import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AddCard } from '../../styles';

const StyledText = styled.div`
  width: 100%;
`;
export default function AddItemToOutfit({ clickHandler }) {
  // useSelector to retrieve current productId from redux store
  const productId = useSelector((state) => state.product.data.id);

  return (
    <AddCard onClick={() => clickHandler(productId)}>
      <StyledText>+</StyledText>
    </AddCard>
  );
}

AddItemToOutfit.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
