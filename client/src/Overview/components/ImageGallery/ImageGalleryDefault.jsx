import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonNav from './ButtonNav';
import ThumbnailList from './ThumbnailList';

const StyledDiv = styled.div`
  /* width: 60%; */
  width:calc((100% - 450px));
  height: 98%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /* border: solid 2px black; */
  /* margin:2px;
  padding:5px; */
`;
const StyledImageTop = styled.div`
  width: 100%;
  height: 60%;
  /* border: solid 2px black; */
  display: flex;
`;
const StyledImageBottom = styled.div`
  width: 100%;
  height: 40%;
  /* border: solid 2px black; */
`;
const StyledthumbnailContainer = styled.div`
  width: 20%;
  height: 100%;
  /* border: solid 2px black; */
`;
const StyledButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  /* border: solid 2px black; */
`;
const data = ['one', 'two', 'three', 'four'];

export default function ImageGalleryDefault({ onClickHandler }) {
  return (
    <StyledDiv>
      <StyledImageTop>
        <StyledthumbnailContainer>
          <ThumbnailList products={data} />
        </StyledthumbnailContainer>
        <StyledButtonContainer onClick={() => onClickHandler()}>
          <ButtonNav />
        </StyledButtonContainer>
      </StyledImageTop>
      <StyledImageBottom onClick={onClickHandler}>Bottom</StyledImageBottom>
    </StyledDiv>
  );
}
StyledButtonContainer.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};
StyledImageBottom.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};
ImageGalleryDefault.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

// ImageGalleryDefault.defaultProps = {
//   onClickHandler: PropTypes.func.isRequired,
// };
