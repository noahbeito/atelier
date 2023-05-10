import React from 'react';
import { DefaultCard } from '../../styles';

export default function NoRelatedItemsCard() {
  return (
    <DefaultCard>
      <div data-testid="default-card">No Related Items...</div>
    </DefaultCard>
  );
}
