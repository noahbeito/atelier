import React from 'react';
import styled from 'styled-components';
import ButtonNav from './ButtonNav';

const StyledDiv = styled.div`
  /* width: 60%; */
  width: 100%;
  height: 98%;
  display: flex;
  flex-direction: column;
  /* border: solid 2px black; */
  /* margin:2px;
  padding:5px; */
`;
const StyledImageTop = styled.div`
  width: 100%;
  height: 100%;
  /* border: solid 2px black; */
  display: flex;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  /* border: solid 2px black; */
`;

export default function ImageGalleryExpand() {
  return (
    <StyledDiv>
      <StyledImageTop>
        <StyledButtonContainer>
          <ButtonNav />
        </StyledButtonContainer>
      </StyledImageTop>
    </StyledDiv>
  );
}
