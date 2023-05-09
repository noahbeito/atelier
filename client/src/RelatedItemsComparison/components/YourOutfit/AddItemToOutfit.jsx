import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from '../../styles';

const StyledText = styled.div`
  // This is just a placeholder. will likely rename
`;
export default function AddItemToOutfit({ clickHandler }) {
  // useSelector to retrieve current productId from redux store
  const productId = 40344; // for testing purposes
  return (
    <Card onClick={() => clickHandler(productId)}>
      <StyledText>+</StyledText>
    </Card>
  );
}

AddItemToOutfit.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
