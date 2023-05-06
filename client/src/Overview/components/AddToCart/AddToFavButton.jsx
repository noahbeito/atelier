import React from 'react';
import styled from 'styled-components';

const Div = styled.section`
  width: 30%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: solid 2px black;
  margin:0px;
  padding:5px;
`;
export default function AddToFavButton() {
  return (
    <Div>
      <button type="button">Star</button>
    </Div>
  );
}
