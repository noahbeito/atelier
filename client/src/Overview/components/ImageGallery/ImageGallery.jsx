import React from 'react';
import styled from 'styled-components';
import ButtonNav from './ButtonNav';
import ThumbnailList from './ThumbnailList';

const StyledDiv = styled.div`
  width: 60%;
  height: 98%;
  display: flex;
  flex-direction: column;
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
  border: solid 2px black;
`;
const StyledButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  /* border: solid 2px black; */
`;
export default function ImageGallery() {
  return (
    <StyledDiv>
      <StyledImageTop>
        <StyledthumbnailContainer>
          <ThumbnailList />
        </StyledthumbnailContainer>
        <StyledButtonContainer>
          <ButtonNav />
        </StyledButtonContainer>
      </StyledImageTop>
      <StyledImageBottom>Bottom</StyledImageBottom>
    </StyledDiv>
  );
}
