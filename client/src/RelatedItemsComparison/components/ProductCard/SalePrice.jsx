import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSalePrice = styled.div`
  display: inline-block;
  color: ${(props) => props.theme.onSell};
`;

const StyledPrice = styled.div`
  display: inline-block;
  text-decoration: line-through;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.loading};
`;

export default function SalePrice({ salePrice, price }) {
  return (
    <div>
      <StyledSalePrice>{salePrice}</StyledSalePrice>
      <StyledPrice>{price}</StyledPrice>
    </div>
  );
}

SalePrice.propTypes = {
  salePrice: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
