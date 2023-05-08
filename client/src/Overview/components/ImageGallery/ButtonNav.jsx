import React from 'react';
import styled from 'styled-components';
import Icons from '../../../components/Icons';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: solid 2px black; */
  /* margin:2px;
  padding:5px; */
`;
const StyledExpandButton = styled.div`
  width: 100%;
  height: 85%;
  /* display: flex;
  flex-direction: column; */
  /* border: solid 2px black; */
  /* margin:2px;
  padding:5px; */
`;
const StyledLeftRightNavigation = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  /* border: solid 2px black; */
  /* margin:2px;
  padding:5px; */
`;

export default function ImageGallery() {
  return (
    <StyledDiv>
      <StyledExpandButton>
        <Icons.ChevronLeft />
      </StyledExpandButton>
      <StyledLeftRightNavigation>
        <Icons.ChevronLeft />
        <Icons.ChevronRight />
      </StyledLeftRightNavigation>
    </StyledDiv>
  );
}
