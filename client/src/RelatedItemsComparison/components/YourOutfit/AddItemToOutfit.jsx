import React from 'react';
import styled from 'styled-components';

export default function AddItemToOutfit() {
  const Card = styled.div`
    display: inline-block;
    border: 1px solid black;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 50px;
    width: 350px;
    height: 300px;
  `;
  return (
    <Card>
      +
    </Card>
  );
}
