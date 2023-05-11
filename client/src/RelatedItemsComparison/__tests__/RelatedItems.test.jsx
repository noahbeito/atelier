import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedItems from '../components/RelatedItems/RelatedItems';

test('should update related items list when a product card is clicked', async () => {
  render(<RelatedItems />);
  await screen.findByRole('no-image');
  fireEvent.click(screen.getByAltText('no-image'));
  await screen.findByAltText('no-image');
  expect(screen.get);
});
