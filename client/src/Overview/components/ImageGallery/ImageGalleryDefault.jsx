import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonNav from './ButtonNav';
import ThumbnailList from './ThumbnailList';
import Icons from '../../../components/Icons';

const StyledDiv = styled.div`
  width:calc((100% - 450px));
  height: 98%;
  display: flex;
  flex-direction: column;
  cursor: zoom-in;
  background: url(${(props) => props.bg});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  :hover{
    cursor: url(${(props) => props.pointers});
  }
  @media(max-width: 600px){
    width: 100%;
    height: 700px;
  }
`;
const StyledImageTop = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
`;
const StyledthumbnailContainer = styled.div`
  width: 20%;
  height: 100%;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
`;
const data = ['one', 'two', 'three', 'four'];

export default function ImageGalleryDefault({
  onClickHandler,
  bg,
  bgHandler,
  defaultNumber,
}) {
  return (
    <StyledDiv
      className="checker"
      bg={bg}
      pointers={Icons.MagnifyPlus}
    >
      <StyledImageTop className="top">
        <StyledthumbnailContainer>
          <ThumbnailList
            defaultNumber={defaultNumber}
            bgHandler={bgHandler}
            products={data}
          />
        </StyledthumbnailContainer>
        <StyledButtonContainer onClick={() => onClickHandler()}>
          <ButtonNav />
        </StyledButtonContainer>
      </StyledImageTop>
    </StyledDiv>
  );
}
ImageGalleryDefault.propTypes = {
  onClickHandler: PropTypes.func,
  bg: PropTypes.string.isRequired,
  defaultNumber: PropTypes.number.isRequired,
  bgHandler: PropTypes.func.isRequired,
};
ImageGalleryDefault.defaultProps = {
  onClickHandler: () => {},
};
