import React from 'react';
import styled from 'styled-components';
import Icons from '../../../components/Icons';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const StyledExpandButton = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;
`;
const StyledLeftButton = styled.div`
 width: 30px;
  background-color: lightgrey;
  border-radius: 25%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledRightButton = styled.div`
  width: 30px;
  background-color: lightgrey;
  border-radius: 25%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledLeftRightNavigation = styled.div`
  position: absolute;
  top: 700px;
  left: 2%;
  width:calc((100% - 500px));
  height: 15%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 600px){
    top: 460px;
    margin-right: 15px;
  }
`;
const changeSelected = (event) => {
  event.stopPropagation();
};
export default function ImageGallery() {
  return (
    <StyledDiv>
      <StyledExpandButton data-testid="ExpandButton">
        <Icons.Expand data-testid="ExpandIcon" />
      </StyledExpandButton>
      <StyledLeftRightNavigation>
        <StyledLeftButton>
          <Icons.ArrowLeft onClick={changeSelected} data-testid="LeftIcon" />
        </StyledLeftButton>
        <StyledRightButton>
          <Icons.ArrowRight onClick={changeSelected} data-testid="RightIcon" />
        </StyledRightButton>
      </StyledLeftRightNavigation>
    </StyledDiv>
  );
}
