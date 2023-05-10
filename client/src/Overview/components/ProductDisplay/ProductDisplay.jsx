import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';
import ImageGalleryDefault from '../ImageGallery/ImageGalleryDefault';
// import ImageGalleryExpand from '../ImageGallery/ImageGalleryExpand';
import CheckoutDisplay from '../CheckoutDisplay/CheckoutDisplay';

const StyledDiv = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  border: solid 2px black;
`;
export default function ProductDisplay({ onClickHandler }) {
  // const [renderCheckout, setRenderCheckout] = useState(true);
  // const onClickHandler = function Clicker() {
  //   console.log('I have been clicked!');
  //   setRenderCheckout(!renderCheckout);
  // };
  // const styles = useSelector((state) => {
  //   console.log('This is state in productDisplay: ', state);
  //   return state.overview.productStyles.styles.results;
  // });
  return (
    <StyledDiv>
      <ImageGalleryDefault onClickHandler={onClickHandler} />
      <CheckoutDisplay />
    </StyledDiv>
  );
}

ProductDisplay.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

ImageGalleryDefault.defaultProps = {
  onClickHandler: PropTypes.func.isRequired,
};
