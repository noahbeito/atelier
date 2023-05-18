import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/ui/Button';
import Icons from '../../../components/Icons';

const StyledDiv = styled.div`
  width: 30%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin:0px;
  padding:5px;
`;
export default function AddToFavButton() {
  return (
    <StyledDiv>
      <Button data-testid="button-up" variant="large-base" style={{ color: 'orange', height: '50px', width: '50px' }}>
        <Icons.Star />
      </Button>
    </StyledDiv>
  );
}
