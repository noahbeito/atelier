import React from 'react';
import styled from 'styled-components';
import { DefaultCard } from '../../styles';

const StyledText = styled.div`
  width: 100%;
`;

export default function NoRelatedItemsCard() {
  return (
    <DefaultCard>
      <StyledText data-testid="default-card">No Related Items...</StyledText>
    </DefaultCard>
  );
}
