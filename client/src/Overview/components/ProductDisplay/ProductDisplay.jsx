import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageGalleryDefault from '../ImageGallery/ImageGalleryDefault';
import CheckoutDisplay from '../CheckoutDisplay/CheckoutDisplay';

const StyledDiv = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  border: solid 2px black;
  @media(max-width: ${((props) => props.theme.bpTablet)}){
    width: 100%;
    height: 1600px;
    display:flex;
    flex-direction: column;
  }
`;
export default function ProductDisplay({
  product,
  onClickHandler,
  bg,
  bgHandler,
  defaultHandler,
  defaultNumber,
  defaultNumberHandler,
}) {
  return (
    <StyledDiv data-testid="ProductDisplay">
      <ImageGalleryDefault
        bg={bg}
        bgHandler={bgHandler}
        onClickHandler={onClickHandler || (() => {})}
        defaultNumber={defaultNumber}
      />
      <CheckoutDisplay
        product={product}
        defaultHandler={defaultHandler}
        defaultNumber={defaultNumber}
        defaultNumberHandler={defaultNumberHandler}
      />
    </StyledDiv>
  );
}

ProductDisplay.propTypes = {
  onClickHandler: PropTypes.func,
  bg: PropTypes.string.isRequired,
  bgHandler: PropTypes.func.isRequired,
  defaultHandler: PropTypes.func.isRequired,
  defaultNumberHandler: PropTypes.func.isRequired,
  defaultNumber: PropTypes.number.isRequired,
  product: PropTypes.number.isRequired,
};

ProductDisplay.defaultProps = {
  onClickHandler: () => {},

};
