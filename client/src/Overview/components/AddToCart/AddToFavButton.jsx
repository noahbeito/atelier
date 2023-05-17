import React, { useState } from 'react';
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
  const [faveCount, setFavCount] = useState(0);
  const addOne = () => {
    setFavCount((prev) => prev + 1);
  };
  return (
    <StyledDiv>
      <h1 data-testid="counter">{ faveCount }</h1>
      <Button data-testid="button-up" onClick={addOne} variant="large-base" style={{ color: 'orange', height: '50px', width: '50px' }}>
        <Icons.Star />
      </Button>
    </StyledDiv>
  );
}
