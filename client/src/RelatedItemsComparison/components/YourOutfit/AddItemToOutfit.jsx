import React from 'react';
import styled from 'styled-components';

export default function AddItemToOutfit() {
  const Card = styled.div`
    height: 300px;
    border: 1px solid black;
    border-radius: 5px;

    padding: 1rem;

    scroll-snap-align: start;
  `;
  const Text = styled.div`
  `;
  return (
    <Card>
      <Text>+</Text>
    </Card>
  );
}
