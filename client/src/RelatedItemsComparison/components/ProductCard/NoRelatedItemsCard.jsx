import React from 'react';
import styled from 'styled-components';
import { DefaultCard } from '../../styles';

// ** DEFAULT CARD IF PRODUCT HAS NO RELATED ITEMS ** //

const StyledText = styled.div`
  width: 100%;
  color: ${(props) => props.theme.textColor};
`;

export default function NoRelatedItemsCard() {
  return (
    <DefaultCard>
      <StyledText data-testid="default-card">No Related Items...</StyledText>
    </DefaultCard>
  );
}
