import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyleThumbnail from '../StyleThumbnail/StyleThumbnail';

const StyledThumbnailGrid = styled.div`
  /* display: flex;
  justify-content: left;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;
const StyledSurround = styled.div`
  border: lightgrey 3px solid;
  border-radius: 5px;
  padding: 5px;
  width:95%;
  /* margin: 5px; */
`;

export default function StyleSelector({ products }) {
  return (
    <StyledSurround>
      <p>Selected Style</p>
      <StyledThumbnailGrid>
        { products.map((product) => <StyleThumbnail product={product} key={product} />) }
      </StyledThumbnailGrid>
    </StyledSurround>
  );
}

StyleSelector.propTypes = {
  products: PropTypes.node,
};

StyleSelector.defaultProps = {
  products: [],
};
