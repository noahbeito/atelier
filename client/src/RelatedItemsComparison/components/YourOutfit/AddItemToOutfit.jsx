import React from 'react';
import styled from 'styled-components';

export default function AddItemToOutfit() {
  const Card = styled.div`
    height: 300px;
    display: inline-block;
    border: 1px solid black;
    border-radius: 5px;
  `;
  const Text = styled.div`
    width: 20vw;
  `;
  return (
    <Card>
      <Text>+</Text>
    </Card>
  );
}
